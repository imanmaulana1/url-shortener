import { TableCell, TableRow } from '@/components/ui/table';
import { CopyIcon } from 'lucide-react';

export default function TableData() {
  return (
    <TableRow>
      <TableCell className='flex items-center gap-4'>
        https://short.ly/abc123 <CopyIcon />
      </TableCell>
      <TableCell>ttps://ui.shadcn.com/docs/components/table</TableCell>
      <TableCell>QR Code</TableCell>
      <TableCell>200</TableCell>
      <TableCell>Oct-20-2024</TableCell>
    </TableRow>
  );
}
