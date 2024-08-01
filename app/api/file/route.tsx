import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(req: Request): Promise<NextResponse> {
  const form = await req.formData();
  console.log(form);
  // getting file from formdata coming in the frontend
  const file = form.get('file') as File;

  if (!file) {
    return NextResponse.json(
      {
        error: 'No file provided',
      },
      { status: 400 }
    );
  }

  const blob = await put(file.name, file, {
    access: 'public',
  });

  return NextResponse.json(blob);
}
