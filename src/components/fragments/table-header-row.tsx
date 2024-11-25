import { TableHead, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ArrowDownZA, ArrowUpAZ } from 'lucide-react';
import { SortOrder } from '@/types';

interface TableHeaderRowProps {
  sort: SortOrder;
  setSort: (value: SortOrder | ((prev: SortOrder) => SortOrder)) => void;
}

export default function TableHeaderRow({ sort, setSort }: TableHeaderRowProps) {
  return (
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
  );
}
