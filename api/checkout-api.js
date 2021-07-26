const { conversionAnalytics } = require('../utils/analytics');
const stripe = require('stripe')(process.env.STRIPE_KEY);
const { Router } = require('express')
const router = Router()
 
router.use('/checkout-api', async (req, res) => {
    const { totalAmount, cancelRoute, productIds,searchQuery } = req.body;

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
});

module.exports = router