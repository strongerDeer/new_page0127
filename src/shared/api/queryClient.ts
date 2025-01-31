import { QueryClient } from '@tanstack/react-query';

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, //쿼리 실패 시 재시도 횟수(기본값 3)
      retryDelay: 3000, // 재시도 간격 3초
      staleTime: 5 * 60 * 1000, // 5분
      gcTime: 5 * 60 * 1000, // 5분
      refetchOnWindowFocus: false,
      placeholderData: 'keepPrevious', // 새 데이터 로딩 중 이전 데이터 유지
    },
  },
});
