import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

interface Params {
  params: {
    id: string;
  };
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
        message: 'Failed to delete your link.',
      },
      {
        status: 500,
      }
    );
  }
}
