// api/create-order.js
const Razorpay = require('razorpay');

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  // Initialize Razorpay securely using Environment Variables
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  // Get the dynamic cart total sent from your React frontend
  const { amount } = req.body; 

  try {
    const options = {
      amount: amount * 100, // Razorpay expects paise, so multiply INR by 100
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    };
    
    // Create the secure order on Razorpay's servers
    const order = await razorpay.orders.create(options);
    
    // Send the Order ID back to your React app
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}