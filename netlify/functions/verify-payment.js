const crypto = require("crypto");

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.razorpay_order_id + "|" + body.razorpay_payment_id)
      .digest("hex");

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: expected === body.razorpay_signature,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};