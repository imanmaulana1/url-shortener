'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/axios';
import { toast } from '@/hooks/use-toast';
import { ErrorResponse, SuccessResponse, UrlsResponse } from '@/types';

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

export const useUrl = (id: string) => {
  return useQuery<SuccessResponse>({
    queryKey: ['url', id],
    queryFn: async () => {
      const response = await api.get(`/api/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};

export const useCreateUrl = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (values: { url: string }) => {
      const response = await api.post('/api/shorten', values);
      return response.data;
    },
    onSuccess: (data) => {
      toast({
        title: 'Success',
        description: data.message,
        variant: 'success',
      });
      queryClient.invalidateQueries({ queryKey: ['urls'] });
    },
    onError: (error) => {
      toast({
        title: 'Failed',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  return mutation;
};

export const useUpdateUrl = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ id, url }: { id: string; url: string }) => {
      const response = await api.patch(`/api/${id}`, {
        url,
      });
      return response.data;
    },
    onSuccess: (data) => {
      toast({
        title: 'Success',
        description: data.message,
        variant: 'success',
      });
      queryClient.invalidateQueries({ queryKey: ['urls'] });
    },
    onError: (error: ErrorResponse) => {
      toast({
        title: 'Failed',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  return mutation;
};

export const useDeleteUrl = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<SuccessResponse, ErrorResponse, string>({
    mutationFn: async (id: string) => {
      const response = await api.delete(`/api/${id}`);
      return response.data;
    },
    onSuccess: (data: SuccessResponse) => {
      toast({
        title: 'Success',
        description: data.message,
        variant: 'success',
      });
      queryClient.invalidateQueries({ queryKey: ['urls'] });
    },
    onError: (error: ErrorResponse) => {
      toast({
        title: 'Failed',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  return mutation;
};
