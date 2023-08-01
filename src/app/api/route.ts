import { NextResponse } from 'next/server';

export async function GET() {
  // return new Response(JSON.stringify({ name: 'Home API route' }), {
  //   status: 200,
  // });
  return NextResponse.json({ name: 'Home API route' }, { status: 200 });
}
