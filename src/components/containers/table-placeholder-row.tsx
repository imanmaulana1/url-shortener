import { TableCell, TableRow } from '@/components/ui/table';

interface TablePlaceholderRowProps {
  children: React.ReactNode;
  colspan: number;
}

export default function TablePlaceholderRow({
  children,
  colspan,
}: TablePlaceholderRowProps) {
  return (
    <TableRow className='bg-transparent'>
      <TableCell colSpan={colspan} className='px-6 py-4 h-[20vh]'>
        {children}
      </TableCell>
    </TableRow>
  );
}
