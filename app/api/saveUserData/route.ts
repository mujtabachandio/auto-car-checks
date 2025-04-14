// app/api/saveUserData/route.ts
import { NextResponse } from 'next/server';
import client from '@/sanity/lib/client';

export async function POST(req: Request) {
  try {
    const { name, email, vinNumber, country } = await req.json();

    if (!name || !email || !vinNumber || !country) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const result = await client.create({
      _type: 'userSubmission',
      name,
      email,
      vinNumber,
      country,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(result);
  } catch (err) {
    console.error('Sanity error:', err);
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}
