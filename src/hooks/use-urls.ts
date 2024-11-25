'use client';

import api from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

interface PaginationData {
  currentPage: number;
  currentLimit: number;
  totalData: number;
  totalPage: number;
  hasMore: boolean;
}

interface UrlData {
  id: string;
  shortCode: string;
  originalUrl: string;
  createdAt: string;
  visits: number;
  qrCode: string;
}

interface UrlsResponse {
  success: boolean;
  message: string;
  data: UrlData[];
  pagination: PaginationData;
}
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
  });
};
