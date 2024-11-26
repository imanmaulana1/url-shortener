'use client';

import { useState } from 'react';
import { useUrls } from '@/hooks/use-urls';
import Hero from '@/components/containers/hero';
import TableListUrl from '@/components/containers/table-list-url';
import PaginationTable from '@/components/fragments/pagination-table';
import TableMobile from '@/components/containers/table-mobile';
import { SortOrder } from '@/types';

export default function Home() {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<SortOrder>('desc');
  const { data: urls, isLoading } = useUrls(sort, page, 5);

  const handlePageChange = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: number
  ) => {
    e.preventDefault();
    setPage(page);
  };

  return (
    <>
      <Hero />
      <section className='block lg:hidden'>
        <TableMobile urls={urls} isLoading={isLoading} />
      </section>
      <section className='hidden lg:block'>
        <TableListUrl
          urls={urls}
          isLoading={isLoading}
          sort={sort}
          setSort={setSort}
        />
      </section>
      {urls && urls.pagination && urls.pagination.totalPage > 1 && (
        <PaginationTable page={page} handlePageChange={handlePageChange} />
      )}
    </>
  );
}
