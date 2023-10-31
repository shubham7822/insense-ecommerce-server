
const express = require('express');
require("dotenv").config();
const app = express();
const Stripe = require('stripe')

const router = express.Router()

router.post('/checkout', async (req, res) => {
  const stripe = Stripe(`${process.env.STRIPE_KEY}`)
  
  const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.userId,
      cart: req.body.cartItems.toString(),
      cartItemCount: req?.body?.cartItems?.length?.toString(),
    },
  });

  const line_items = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: "inr",
        product_data: {
          name: item?.name,
          images: [item?.imageUrl],
          description: item?.description,
          metadata: {
            id: item?._id,
          },
        },
        unit_amount: item?.price * 100,
      },
      quantity: item?.qty,
    };
  });

  const jsonLineItems = JSON.stringify(line_items)

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["IN"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "inr",
          },
          display_name: "Free shipping",
          // Delivers between 5-7 business days
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 50,
            currency: "inr",
          },
          display_name: "Next day air",
          // Delivers in exactly 1 business day
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 1,
            },
            maximum: {
              unit: "business_day",
              value: 1,
            },
          },
        },
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
    line_items,
    mode: "payment",
    customer: customer.id,
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `http://localhost:3000/cart`
  });

  // res.redirect(303, session.url);
  res.send({ url: session.url });
});

module.exports = router