import TablePlaceholderRow from '@/components/containers/table-placeholder-row';

interface TableNoDataRowProps {
  colspan: number;
}

export default function TableNoDataRow({ colspan }: TableNoDataRowProps) {
  return (
    <TablePlaceholderRow colspan={colspan}>
      <h3 className='text-center'>No data found</h3>
    </TablePlaceholderRow>
  );
}
