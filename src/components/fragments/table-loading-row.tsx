import TablePlaceholderRow from '@/components/containers/table-placeholder-row';
import { LoadingSpinner } from '@/components/ui/spinner';

export default function TableLoadingRow() {
  return (
    <TablePlaceholderRow>
      <LoadingSpinner className='mx-auto' />
    </TablePlaceholderRow>
  );
}
