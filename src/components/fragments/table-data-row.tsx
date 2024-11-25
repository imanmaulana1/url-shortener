import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import moment from 'moment';

import { TableCell, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

import { Check, Copy, ExternalLink, EyeIcon } from 'lucide-react';
import { UrlData } from '@/types';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface TableDataRowProps {
  data: UrlData;
}

export default function TableDataRow({ data }: TableDataRowProps) {
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
        <div className='flex items-center justify-between'>
          <Link
            href={`/${data.shortCode}`}
            target='_blank'
            className='text-sm text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-600 hover:underline flex items-center gap-1'
          >
            <span className='text-sm'>{data.fullShortCode}</span>
            <ExternalLink className='w-3 h-3' />
          </Link>

          <Tooltip>
            <TooltipTrigger asChild>
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
            </TooltipTrigger>
            <TooltipContent>
              <p className='text-sm'>Copy Link</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TableCell>
      <TableCell className='px-6'>
        <div className='flex items-center gap-2'>
          <Link
            href={data.originalUrl}
            target='_blank'
            className='text-sm text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-600 hover:underline flex items-center gap-1'
          >
            {data.originalUrl}
            <ExternalLink className='w-3 h-3' />
          </Link>
        </div>
      </TableCell>
      <TableCell className='px-6'>
        <Tooltip>
          <TooltipTrigger>
            <a href={data.qrCode} download='qr-code.png'>
              <Image src={data.qrCode} alt='qr-code' width={64} height={64} />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p className='text-sm'>Download QR Code</p>
          </TooltipContent>
        </Tooltip>
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
