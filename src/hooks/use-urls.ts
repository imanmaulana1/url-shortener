'use client';

import api from '@/lib/axios';
import { UrlsResponse } from '@/types';
import { useQuery } from '@tanstack/react-query';

export const useUrls = (sort = 'desc', page = 1, limit = 5) => {
  return useQuery<UrlsResponse>({
    queryKey: ['urls', sort, page, limit],
    queryFn: async ({ queryKey }) => {
      const [, sortOrder, currentPage, currentLimit] = queryKey;
      const response = await api.get(
        `/api/urls?page=${currentPage}&limit=${currentLimit}&sortBy=${sortOrder}`
      );
      return response.data;
    },
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
};
