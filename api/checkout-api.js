const { conversionAnalytics } = require('../utils/analytics');
var bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_KEY);
const express = require('express');
const router = express();

router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// parse application/json
router.use(express.json());

async function checkout(req, res) {
  const { totalAmount, cancelRoute, productIds, searchQuery } = req.body;
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Movie Store',
              images: ['https://i.imgur.com/EHyR2nP.png'],
            },
            unit_amount: parseInt(totalAmount) * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}?is_stripe=true`,
      cancel_url: `${req.headers.origin}${cancelRoute}`,
    });
    // await conversionAnalytics(searchQuery, productIds);
    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}

router.post('/api/checkout-api', (req, res) => {
  checkout(req, res);
});

router.post('/checkout-api', (req, res) => {
  checkout(req, res);
});

module.exports = router;
