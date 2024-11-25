'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import TableData from '@/components/fragments/table-data';
import { ArrowDownZA, ArrowUpAZ } from 'lucide-react';
import { LoadingSpinner } from '../ui/spinner';
import { Button } from '../ui/button';

interface PaginationData {
  currentPage: number;
  currentLimit: number;
  totalData: number;
  totalPage: number;
  hasMore: boolean;
}

interface UrlData {
  id: string;
  shortCode: string;
  originalUrl: string;
  createdAt: string;
  visits: number;
  qrCode: string;
}

interface UrlsResponse {
  success: boolean;
  message: string;
  data: UrlData[];
  pagination: PaginationData;
}

type SortOrder = 'asc' | 'desc';

interface TableListUrlProps {
  urls: UrlsResponse | undefined;
  isLoading: boolean;
  sort: SortOrder;
  setSort: (value: SortOrder | ((prev: SortOrder) => SortOrder)) => void;
}

export default function TableListUrl({
  urls,
  isLoading,
  sort,
  setSort,
}: TableListUrlProps) {
  return (
    <Table className='container lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mt-4'>
      <TableHeader>
        <TableRow>
          <TableHead className='px-6 py-4 text-left'>Short Link</TableHead>
          <TableHead className='px-6 py-4 text-left'>Original Link</TableHead>
          <TableHead className='px-6 py-4 text-left'>QR Code</TableHead>
          <TableHead className='px-6 py-4 text-center'>Visit</TableHead>
          <TableHead className='px-6 py-4 text-left'>
            <Button
              variant='ghost'
              onClick={() =>
                setSort((prev: SortOrder) => (prev === 'asc' ? 'desc' : 'asc'))
              }
            >
              <div className='flex items-center gap-2'>
                Date
                {sort === 'desc' ? (
                  <ArrowUpAZ className='w-4 h-4' />
                ) : (
                  <ArrowDownZA className='w-4 h-4' />
                )}
              </div>
            </Button>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {isLoading ? (
          <TableRow>
            <TableCell colSpan={5} className='px-6 py-4 h-[20vh]'>
              <LoadingSpinner className='mx-auto' />
            </TableCell>
          </TableRow>
        ) : urls?.data.length === 0 ? (
          <TableRow>
            <TableCell colSpan={5} className='px-6 py-4 h-[20vh]'>
              <h3 className='text-center'>No data found</h3>
            </TableCell>
          </TableRow>
        ) : (
          urls?.data.map((url) => <TableData key={url.id} data={url} />)
        )}
      </TableBody>
    </Table>
  );
}
