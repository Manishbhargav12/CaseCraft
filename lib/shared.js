// Shared helpers used by the /api functions. Secrets come from environment variables only.
const BASE = process.env.CASHFREE_ENV === "production"
  ? "https://api.cashfree.com/pg"
  : "https://sandbox.cashfree.com/pg";

const CF_HEADERS = {
  "Content-Type": "application/json",
  "x-api-version": "2025-01-01",
  "x-client-id": process.env.CASHFREE_APP_ID,
  "x-client-secret": process.env.CASHFREE_SECRET,
};

// Ask Cashfree directly for the real order status (never trust the browser).
async function getCashfreeOrder(orderId) {
  const r = await fetch(`${BASE}/orders/${encodeURIComponent(orderId)}`, { headers: CF_HEADERS });
  return r.ok ? r.json() : null;
}

// Minimal Supabase REST helper (service key stays on the server).
async function db(method, query, body) {
  const r = await fetch(`${process.env.SUPABASE_URL}/rest/v1/orders${query}`, {
    method,
    headers: {
      apikey: process.env.SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${process.env.SUPABASE_SERVICE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!r.ok) throw new Error("DB error: " + (await r.text()));
}

module.exports = { BASE, CF_HEADERS, getCashfreeOrder, db };
