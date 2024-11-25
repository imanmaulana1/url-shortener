import prisma from '@/lib/db';
import generateQrCode from '@/lib/qr-code';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const sortBy = searchParams.get('sortBy') || 'desc';
  const page = searchParams.get('page') || 1;
  const limit = searchParams.get('limit') || 5;

  const offset = (Number(page) - 1) * Number(limit);

  try {
    const totalData = await prisma.url.count();

    const urls = await prisma.url.findMany({
      orderBy: {
        createdAt: sortBy === 'desc' ? 'desc' : 'asc',
      },
      take: 5,
      skip: offset,
    });

    const qrCodes = await Promise.all(
      urls.map(async (url) => {
        const qrCode = await generateQrCode(
          `${process.env.NEXT_PUBLIC_BASE_URL}/${url.shortCode}`
        );
        return {
          id: url.id,
          fullShortCode: `${process.env.NEXT_PUBLIC_BASE_URL}/${url.shortCode}`,
          shortCode: url.shortCode,
          originalUrl: url.originalUrl,
          favicon: url.originalUrl,
          createdAt: url.createdAt,
          visits: url.visits,
          qrCode: qrCode,
        };
      })
    );

    return NextResponse.json({
      success: true,
      message: 'URLs fetched successfully',
      data: qrCodes,
      pagination: {
        currentPage: Number(page),
        currentLimit: Number(limit),
        totalData: totalData,
        totalPage: Math.ceil(totalData / Number(limit)),
        hasMore: Number(page) < Math.ceil(totalData / Number(limit)),
      },
    });
  } catch (error) {
    console.error('Error fetching URLs:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error fetching URLs',
      },
      { status: 500 }
    );
  }
}
