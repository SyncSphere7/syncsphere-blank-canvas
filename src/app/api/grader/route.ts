import { NextResponse } from 'next/server';
import { gradeWebsite } from '@/lib/grader';
import { clean } from '@/lib/email';

export const runtime = 'nodejs';
export const maxDuration = 30;

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as { url?: unknown } | null;
  const url = clean(body?.url, 500);
  if (!url) return NextResponse.json({ error: 'Please enter a website address.' }, { status: 400 });
  try {
    return NextResponse.json(await gradeWebsite(url));
  } catch (err) {
    const message = err instanceof Error && err.name !== 'TimeoutError' ? err.message : 'The website took too long to respond.';
    return NextResponse.json({ error: message }, { status: 422 });
  }
}
