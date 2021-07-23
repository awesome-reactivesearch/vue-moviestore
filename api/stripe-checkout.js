const stripe = require('stripe')('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');
const { Router } = require('express')
const router = Router()

 
router.use('/checkout-api', async (req, res) => {
    const { totalAmount, cancelRoute } = req.body;

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
          success_url: `${req.headers.origin}/`,
          cancel_url: `${req.headers.origin}${cancelRoute}`,
        });
        
        res.json({ url: session.url });
      } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
      }
});

module.exports = router