// app/api/createPaymentIntent/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
});

export async function POST(req: Request) {
  try {
    const { price,email } = await req.json();
    if (!price) {
      return NextResponse.json({ error: 'Price not provided' }, { status: 400 });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(price * 100), // Convert dollars to cents
      currency: 'usd',
      payment_method_types: ['card'],
      receipt_email: email, // <<--- pass the customer's email here
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('PaymentIntent creation error:', error);
    return NextResponse.json({ error: 'PaymentIntent creation error' }, { status: 500 });
  }
}
