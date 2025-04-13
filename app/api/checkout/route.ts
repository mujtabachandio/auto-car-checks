// src/app/api/checkout/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Extract the amount from the request body
      const { amount } = req.body;

      // Create a PaymentIntent with the specified amount
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        automatic_payment_methods: { enabled: true },
      });

      // Send the client secret to the client
      res.status(200).send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch {
      // Catch error without using a variable (for simplicity)
      res.status(500).send({ error: 'Failed to create payment intent' });
    }
  } else {
    res.status(405).send({ error: 'Method Not Allowed' });
  }
}
