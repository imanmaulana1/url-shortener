import Link from 'next/link';
import Image from 'next/image';
import { CircleArrowDown, Edit2, ExternalLink } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';
import TooltipCopied from '@/components/fragments/tooltip-copied';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import TooltipAction from '@/components/fragments/tooltip-action';
import ModalDelete from '@/components/fragments/modal-delete';

import { UrlData } from '@/types';

interface TableMobileDataRowProps {
  data: UrlData;
  onEdit: (id: string) => void;
}

export default function TableMobileDataRow({
  data,
  onEdit,
}: TableMobileDataRowProps) {
  return (
    <TableRow className='hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'>
      <TableCell colSpan={12} className='px-4 py-3 w-full'>
        <Collapsible>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center justify-between w-[75%] md:w-[45%]'>
              <Link
                href={`/${data.shortCode}`}
                target='_blank'
                className='text-sm text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-600 hover:underline flex items-center gap-1'
              >
                <span className='text-sm truncate max-w-[200px]'>
                  {data.fullShortCode}
                </span>
                <ExternalLink className='w-3 h-3 flex-shrink-0' />
              </Link>
              <TooltipCopied data={data} />
            </div>
            <CollapsibleTrigger className='w-6 h-6 flex items-center justify-end'>
              <CircleArrowDown
                className='w-full h-full'
                aria-label='Toggle additional details'
              />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className='w-full col-span-1 px-4 py-2 bg-gray-50 dark:bg-gray-800'>
            <div className='grid grid-cols-1 gap-2'>
              <div className='flex flex-col'>
                <span className='text-xs font-semibold text-gray-600 dark:text-gray-300'>
                  Original Link
                </span>
                <Link
                  href={data.originalUrl}
                  target='_blank'
                  className='text-sm text-blue-700 dark:text-blue-400 hover:underline truncate'
                >
                  {data.originalUrl}
                </Link>
              </div>
              <div className='flex flex-col'>
                <span className='text-xs font-semibold text-gray-600 dark:text-gray-300'>
                  QR Code
                </span>
                <Image
                  src={data.qrCode}
                  alt='QR Code'
                  width={400}
                  height={400}
                  className='object-contain mt-1'
                />
              </div>
              <div className='flex flex-col'>
                <span className='text-xs font-semibold text-gray-600 dark:text-gray-300'>
                  Total Visits
                </span>
                <p className='text-sm'>{data.visits} Visits</p>
              </div>
              <div className='flex items-center justify-end space-x-2'>
                <TooltipAction
                  onClick={() => onEdit(data.id)}
                  icon={<Edit2 className='h-4 w-4' />}
                  tooltipContent='Edit'
                  className=' bg-blue-500 
        text-white 
        hover:text-gray-200
        hover:bg-blue-600 
        dark:bg-blue-600 
        dark:hover:bg-blue-700 
        focus:ring-2 
        focus:ring-blue-300 
        dark:focus:ring-blue-800'
                />
                <ModalDelete id={data.id} />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </TableCell>
    </TableRow>
  );
}
