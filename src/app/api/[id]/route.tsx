import prisma from '@/lib/db';
import { urlSchema } from '@/lib/schemas';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

interface Params {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: Params) {
  const { id } = await params;

  try {
    const data = await prisma.url.findUnique({
      where: {
        id,
      },
    });

    if (!data) {
      return NextResponse.json(
        {
          success: false,
          message: 'The link you requested does not exist',
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'URL fetched successfully',
      data,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred',
      },
      {
        status: 500,
      }
    );
  }
}

export async function PATCH(request: NextRequest, { params }: Params) {
  const body = await request.json();
  const { id } = await params;

  const validatedBody = urlSchema.parse(body);

  try {
    const data = await prisma.url.update({
      where: {
        id,
      },
      data: {
        originalUrl: validatedBody.url,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your link has been successfully updated!',
        data,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);
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

    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred',
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: Params) {
  const { id } = await params;

  try {
    const deletedUrl = await prisma.url.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Your link has been successfully deleted!',
      data: {
        id: deletedUrl.id,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred',
      },
      {
        status: 500,
      }
    );
  }
}
