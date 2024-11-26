'use client';

import { Table, TableBody, TableHeader } from '@/components/ui/table';
import TableDataRow from '@/components/fragments/table-data-row';
import TableLoadingRow from '@/components/fragments/table-loading-row';
import TableNoDataRow from '@/components/fragments/table-no-data-row';
import TableHeaderRow from '@/components/fragments/table-header-row';
import { SortOrder, UrlsResponse } from '@/types';

interface TableListUrlProps {
  urls: UrlsResponse | undefined;
  isLoading: boolean;
  sort: SortOrder;
  setSort: (value: SortOrder | ((prev: SortOrder) => SortOrder)) => void;
}

export default function TableListUrl({
  urls,
  isLoading,
  sort,
  setSort,
}: TableListUrlProps) {
  return (
    <Table className='container lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mt-4'>
      <TableHeader>
        <TableHeaderRow sort={sort} setSort={setSort} />
      </TableHeader>
      <TableBody>
        {isLoading && <TableLoadingRow colspan={6} />}

        {!isLoading && urls?.data.length === 0 ? (
          <TableNoDataRow colspan={6} />
        ) : (
          urls?.data.map((url) => <TableDataRow key={url.id} data={url} />)
        )}
      </TableBody>
    </Table>
  );
}
