import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import TableData from '@/components/fragments/table-data';
import { ArrowDownZA } from 'lucide-react';

export default function TableListUrl() {
  return (
    <Table className='container lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl'>
      <TableCaption>A List of Recently Shortened URLs.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Short Link</TableHead>
          <TableHead>Original Link</TableHead>
          <TableHead>QR Code</TableHead>
          <TableHead>Clicks</TableHead>
          <TableHead className='flex items-center gap-2'>
            Date <ArrowDownZA size={14} />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableData />
        <TableData />
        <TableData />
        <TableData />
      </TableBody>
    </Table>
  );
}
