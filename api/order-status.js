const { getCashfreeOrder, db } = require("../lib/shared");

module.exports = async (req, res) => {
  const orderId = String(req.query.order_id || "");
  if (!/^PC\d+$/.test(orderId)) return res.status(400).json({ error: "Bad order id" });

  const order = await getCashfreeOrder(orderId);
  if (!order) return res.status(404).json({ error: "Order not found" });

  if (order.order_status === "PAID") {
    try { await db("PATCH", `?order_id=eq.${orderId}`, { status: "paid" }); } catch (e) { console.error(e); }
  }
  res.status(200).json({ status: order.order_status });
};
