import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import TableMobileDataRow from '@/components/fragments/table-mobile-data-row';
import TableLoadingRow from '@/components/fragments/table-loading-row';
import TableNoDataRow from '@/components/fragments/table-no-data-row';
import { UrlsResponse } from '@/types';

interface TableMobileProps {
  urls: UrlsResponse | undefined;
  isLoading: boolean;
  onEdit: (id: string) => void;
}

export default function TableMobile({ urls, isLoading, onEdit }: TableMobileProps) {
  return (
    <Table className='container max-w-2xl mt-8'>
      <TableHeader>
        <TableRow>
          <TableHead colSpan={2} className='bg-secondary'>
            Shorten Links
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {isLoading && <TableLoadingRow colspan={6} />}

        {!isLoading && urls?.data.length === 0 ? (
          <TableNoDataRow colspan={6} />
        ) : (
          urls?.data.map((url) => (
            <TableMobileDataRow key={url.id} data={url} onEdit={onEdit} />
          ))
        )}
      </TableBody>
    </Table>
  );
}
