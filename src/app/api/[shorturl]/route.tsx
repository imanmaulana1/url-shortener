import { NextRequest, NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import prisma from '@/lib/db';
import { z } from 'zod';

const urlSchema = z.object({
  url: z.string().url('Invalid URL. Please enter a valid URL.'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedBody = urlSchema.parse(body);

    const shortCode = nanoid(6);

    const shortenedUrl = await prisma.url.create({
      data: {
        originalUrl: validatedBody.url,
        shortCode,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your link has been successfully shortened!',
        data: shortenedUrl,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: error.errors.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    console.error('Unexpected error occurred:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred',
      },
      { status: 500 }
    );
  }
}
