// app/api/saveUserData/route.ts
import { NextResponse } from 'next/server';
import client from '@/sanity/lib/client';

export async function POST(req: Request) {
  try {
    const { name, email, price } = await req.json();

    // Basic validation to ensure all fields are provided
    if (!name || !email || !price) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create a new user submission in Sanity
    const result = await client.create({
      _type: 'userSubmission',
      name,
      email,
      price,
      createdAt: new Date().toISOString(),
    });

    // Return the result of the create operation
    return NextResponse.json(result);
  } catch (err) {
    // Log the error only in development mode for security reasons
    if (process.env.NODE_ENV === 'development') {
      console.error('Sanity error:', err);
    }

    // Return a 500 error if something goes wrong
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}
