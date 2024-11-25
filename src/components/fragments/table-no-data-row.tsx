import TablePlaceholderRow from '@/components/containers/table-placeholder-row';

export default function TableNoDataRow() {
  return (
    <TablePlaceholderRow>
      <h3 className='text-center'>No data found</h3>
    </TablePlaceholderRow>
  );
}
