import TablePlaceholderRow from '@/components/containers/table-placeholder-row';
import { LoadingSpinner } from '@/components/ui/spinner';

interface TableLoadingRowProps {
  colspan: number;
}

export default function TableLoadingRow({ colspan }: TableLoadingRowProps) {
  return (
    <TablePlaceholderRow colspan={colspan}>
      <LoadingSpinner className='mx-auto' />
    </TablePlaceholderRow>
  );
}
