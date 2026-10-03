const { getCashfreeOrder, db } = require("../lib/shared");

// Cashfree calls this URL after a payment. We don't trust the payload itself:
// we take the order_id and ask Cashfree for the real status.
module.exports = async (req, res) => {
  try {
    const orderId = req.body && req.body.data && req.body.data.order && req.body.data.order.order_id;
    if (orderId) {
      const order = await getCashfreeOrder(orderId);
      if (order && order.order_status === "PAID") {
        await db("PATCH", `?order_id=eq.${encodeURIComponent(orderId)}`, { status: "paid" });
      }
    }
  } catch (e) {
    console.error(e);
  }
  res.status(200).send("ok");
};
