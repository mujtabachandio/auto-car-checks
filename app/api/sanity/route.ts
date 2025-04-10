import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@sanity/client'; // Sanity client import
import Stripe from 'stripe';

// Initialize the Sanity Client using createClient
const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'b6zqgahr',
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
  token: process.env.SANITY_API_TOKEN || "skvAVLtyikDllIqhiHTvSkrOo8e8AsvJHdlOg9LBxoztV0VYpRNVKEsdOx3DznOqMHPUTzyChGKcrhR1mTThievCCt7EOR40b42uzihSx7vcYM4If5SSgsbBgKXTpPECYnh9Mpjlz35I0OOov5Y7EMZnEIcusvKZ6Kz6kNCM56yMQFkRnlXS"  // Ensure this token has write permissions
});

// Initialize the Stripe Client
const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-03-31.basil',  // Use appropriate Stripe API version
});

// POST method for handling form submission and Stripe session creation
export async function POST(req: NextRequest) {
  try {
    // Parse the incoming JSON request body
    const { name, email, phone, vinNumber, package: pkg, price, tier } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !vinNumber || !pkg || !price || !tier) {
      return NextResponse.json({ error: 'Missing required data' }, { status: 400 });
    }

    // Convert price from string to number, e.g., "$84.99" -> 84.99
    const priceInDollars = parseFloat(price.replace('$', ''));

    // Convert dollars to cents (e.g., 84.99 -> 8499 cents)
    const priceInCents = Math.round(priceInDollars * 100); // 8499 cents

    // Create a new form submission in Sanity using the formSubmission schema
    const sanityResponse = await client.create({
      _type: 'formSubmission',
      userName: name,
      userEmail: email,
      userPhone: phone,
      vinNumber,
      submittedAt: new Date().toISOString(),  // Record the submission time
    });

    console.log('Form data saved in Sanity:', sanityResponse);

    // Create a Stripe checkout session
    const session = await stripeClient.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd', // Ensure this is 'usd' and not something else
            product_data: {
              name: pkg, // Product name (e.g., Silver Package, Gold Package)
            },
            unit_amount: priceInCents, // Correct price in cents
          },
          quantity: 1,  // Quantity of the product (1 in this case)
        },
      ],
      mode: 'payment',  // Payment mode (one-time payment)
      success_url: `${process.env.NEXT_PUBLIC_URL}/success`,  // URL on success
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,    // URL on cancel
    });

    // Send the Stripe checkout session URL back to the client
    return NextResponse.json({ checkoutUrl: session.url }, { status: 200 });
  } catch (error) {
    console.error('Error during submission or Stripe session creation:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
