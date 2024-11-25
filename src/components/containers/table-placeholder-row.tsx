import { TableCell, TableRow } from '@/components/ui/table';

interface TablePlaceholderRowProps {
  children: React.ReactNode;
}

export default function TablePlaceholderRow({
  children,
}: TablePlaceholderRowProps) {
  return (
    <TableRow>
      <TableCell colSpan={5} className='px-6 py-4 h-[20vh]'>
        {children}
      </TableCell>
    </TableRow>
  );
}
