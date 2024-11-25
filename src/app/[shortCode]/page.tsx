import prisma from '@/lib/db';
import { notFound, redirect } from 'next/navigation';

export default async function RedirectPage({
  params,
}: {
  params: Promise<{ shortCode: string }>;
}) {
  const { shortCode } = await params;

  const url = await prisma.url.findUnique({
    where: {
      shortCode,
    },
  });

  if (!url) {
    notFound();
  }

  await prisma.url.update({
    where: {
      shortCode,
    },
    data: {
      visits: {
        increment: 1,
      },
    },
  });

  redirect(url.originalUrl);
}
