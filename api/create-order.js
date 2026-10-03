const { BASE, CF_HEADERS, db } = require("../lib/shared");

// Keep these in sync with index.html. The server decides every price.
const PRICES = { hard: 149, soft: 199, glass: 299 };
const FREE_SHIP = 499, SHIP = 60;
const DESIGNS = ["d1","d2","d3","d4","d5","d6","d7","d8","d9","d10"];
const SITE = process.env.SITE_URL; // e.g. https://yourshop.vercel.app (no trailing slash)

const clean = (s, max) => String(s || "").trim().slice(0, max);

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const b = req.body || {};
  const items = (Array.isArray(b.items) ? b.items : []).slice(0, 10).map(i => ({
    design: clean(i.design, 10), model: clean(i.model, 80), type: clean(i.type, 10),
    qty: Math.min(10, Math.max(1, parseInt(i.qty, 10) || 1)),
  }));
  const o = {
    name: clean(b.name, 80), phone: clean(b.phone, 10), email: clean(b.email, 120),
    address: clean(b.address, 300), city: clean(b.city, 60), state: clean(b.state, 60), pincode: clean(b.pincode, 6),
  };

  if (!items.length || items.some(i => !/^[a-z0-9-]{1,60}$/.test(i.design) || !Object.hasOwn(PRICES, i.type) || !i.model))
    return res.status(400).json({ error: "Your cart has an invalid item." });
  if (!o.name || !o.address || !o.city || !o.state) return res.status(400).json({ error: "Fill in all address fields." });
  if (!/^[6-9]\d{9}$/.test(o.phone)) return res.status(400).json({ error: "Enter a valid 10-digit mobile number." });
  if (!/^\S+@\S+\.\S+$/.test(o.email)) return res.status(400).json({ error: "Enter a valid email." });
  if (!/^\d{6}$/.test(o.pincode)) return res.status(400).json({ error: "Enter a valid 6-digit pincode." });

  const subtotal = items.reduce((s, i) => s + PRICES[i.type] * i.qty, 0);
  const total = subtotal + (subtotal >= FREE_SHIP ? 0 : SHIP);
  const orderId = "PC" + Date.now() + Math.floor(Math.random() * 1000);

  try {
    const r = await fetch(`${BASE}/orders`, {
      method: "POST",
      headers: CF_HEADERS,
      body: JSON.stringify({
        order_id: orderId,
        order_amount: total,
        order_currency: "INR",
        order_note: items.map(i => `${i.design}/${i.model}/${i.type}x${i.qty}`).join(", ").slice(0, 200),
        customer_details: { customer_id: "c" + Date.now(), customer_name: o.name, customer_email: o.email, customer_phone: o.phone },
        order_meta: { return_url: `${SITE}/success.html?order_id={order_id}`, notify_url: `${SITE}/api/webhook` },
      }),
    });
    const data = await r.json();
    if (!r.ok) return res.status(502).json({ error: data.message || "Could not start payment." });

    await db("POST", "", { order_id: orderId, items, ...o, amount: total, status: "pending" });
    res.status(200).json({ orderId, paymentSessionId: data.payment_session_id });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};
