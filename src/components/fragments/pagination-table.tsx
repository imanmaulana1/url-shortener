'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useUrls } from '@/hooks/use-urls';

interface PaginationTableProps {
  page: number;
  handlePageChange: (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: number
  ) => void;
}

export default function PaginationTable({
  page,
  handlePageChange,
}: PaginationTableProps) {
  const { data: urls } = useUrls();

  return (
    <Pagination key={page} className='my-8'>
      <PaginationContent>
        {urls?.pagination?.totalPage && urls.pagination.totalPage > 1 && (
          <PaginationItem className=' mr-1'>
            {page > 1 ? (
              <PaginationPrevious
                onClick={(e) => handlePageChange(e, page - 1)}
                className='cursor-pointer'
              />
            ) : (
              <PaginationPrevious className='cursor-not-allowed opacity-70' />
            )}
          </PaginationItem>
        )}

        {Array.from({
          length: urls?.pagination?.totalPage || 1,
        }).map((_, index) => (
          <PaginationItem key={index} className=''>
            <PaginationLink
              href='#'
              onClick={(e) => {
                handlePageChange(e, index + 1);
              }}
              className={
                page === index + 1
                  ? 'font-bold bg-primary text-primary-foreground'
                  : ''
              }
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        {urls?.pagination?.totalPage && urls.pagination.totalPage > 1 && (
          <PaginationItem className='ml-1'>
            {page < urls.pagination.totalPage ? (
              <PaginationNext
                onClick={(e) => handlePageChange(e, page + 1)}
                className='cursor-pointer'
              />
            ) : (
              <PaginationNext className='cursor-not-allowed opacity-70' />
            )}
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
