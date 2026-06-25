import { serverFetch } from '../server';

export const fethMyPayments = async (email) => {
  const result = await serverFetch(`/api/payment/${email}`);
  return result;
};

// cgat

app.post("/api/payments", async (req, res) => {
  try {
    const paymentData = req.body;

    if (!paymentData?.transactionId) {
      return res.status(400).send({
        success: false,
        message: "Transaction ID is required",
      });
    }

    const newPayment = {
      transactionId: paymentData.transactionId,
      invoiceId: paymentData.invoiceId || `INV-${Date.now()}`,

      bookingId: paymentData.bookingId || null,
      propertyId: paymentData.propertyId || null,

      buyerName: paymentData.buyerName || "Unknown User",
      buyerEmail: paymentData.buyerEmail || "",

      propertyTitle: paymentData.propertyTitle || "Untitled Property",
      propertyLocation: paymentData.propertyLocation || "Unknown Location",

      amount: Number(paymentData.amount) || 0,
      paymentMethod: (paymentData.paymentMethod || "bkash").toLowerCase(),
      status: (paymentData.status || "pending").toLowerCase(),

      paidAt:
        paymentData.status?.toLowerCase() === "paid" ? new Date() : null,
      createdAt: new Date(),
    };

    const result = await paymentsCollection.insertOne(newPayment);

    res.send({
      success: true,
      message: "Payment saved successfully",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("Create payment error:", error);
    res.status(500).send({
      success: false,
      message: "Failed to save payment",
      error: error.message,
    });
  }
});