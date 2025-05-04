import { NextRequest, NextResponse } from 'next/server';
import  sanityClient  from '@/sanity/lib/client';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const doc = {
    _type: 'userSubmission',
    name: body.name,
    email: body.email,
    country: body.country,
    userPhone: body.userPhone,
    vinNumber: body.vinNumber,
    createdAt: new Date().toISOString(),
  };

  try {
    await sanityClient.create(doc);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Sanity submission error:', error);
    return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
  }
}
