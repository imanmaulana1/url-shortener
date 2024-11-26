export type SortOrder = 'asc' | 'desc';

export interface PaginationData {
  currentPage: number;
  currentLimit: number;
  totalData: number;
  totalPage: number;
  hasMore: boolean;
}

export interface UrlData {
  id: string;
  fullShortCode: string;
  shortCode: string;
  originalUrl: string;
  createdAt: string;
  visits: number;
  qrCode: string;
}

export interface UrlsResponse {
  success: boolean;
  message: string;
  data: UrlData[];
  pagination: PaginationData;
}

export interface SuccessResponse {
  success: boolean;
  message: string;
  data: UrlData;
}

export interface ErrorResponse {
  success: boolean;
  message: string;
}
