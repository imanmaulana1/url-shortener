import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import moment from 'moment';

import { TableCell, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

import { Check, Copy, ExternalLink, EyeIcon } from 'lucide-react';

interface TableDataProps {
  data: {
    id: string;
    shortCode: string;
    originalUrl: string;
    createdAt: string;
    visits: number;
    qrCode: string;
  };
}

export default function TableData({ data }: TableDataProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const formattedDate = moment('Oct-20-2024', 'MMM-DD-YYYY').format(
    'MMM-DD-YYYY'
  );

  const handleCopyUrl = (url: string, id: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(id);
    });
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <TableRow>
      <TableCell className='px-6'>
        <div className='flex items-center justify-between gap-2'>
          <span className='text-sm'>{data.shortCode}</span>
          <Button
            variant={'ghost'}
            aria-label='copy'
            onClick={() => handleCopyUrl(data.shortCode, data.id)}
          >
            {copiedId === data.id ? (
              <Check className='w-4 h-4' />
            ) : (
              <Copy className='w-4 h-4' />
            )}
          </Button>
        </div>
      </TableCell>
      <TableCell className='px-6'>
        <div className='flex items-center gap-2'>
          <Link
            href={data.originalUrl}
            target='_blank'
            className='text-sm text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-600 flex items-center gap-1'
          >
            {data.originalUrl}
            <ExternalLink className='w-3 h-3' />
          </Link>
        </div>
      </TableCell>
      <TableCell className='px-6'>
        <Image src={data.qrCode} alt='qr-code' width={64} height={64} />
      </TableCell>
      <TableCell className='px-6'>
        <div className='flex items-center gap-2'>
          <EyeIcon className='w-4 h-4' />
          <span className='text-sm'>{data.visits} views</span>
        </div>
      </TableCell>
      <TableCell className='px-6'>
        <span className='text-sm'>{formattedDate}</span>
      </TableCell>
    </TableRow>
  );
}
