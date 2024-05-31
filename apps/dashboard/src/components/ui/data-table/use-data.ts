import { ApiResponse } from "@/lib/api-response";
import { ColumnFiltersState } from "@tanstack/react-table";
import { useCallback, useState } from "react";

export const useData = <T,>(fetchData: (pageIndex: number, pageSize: number, filters?: string) => Promise<ApiResponse<T[]>>) => {
  const [data, setData] = useState<T[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getData = useCallback(async (pageIndex: number, pageSize: number, filters?: string) => {
    setLoading(true);
    console.log(filters);
    try {
      const response = await fetchData(pageIndex, pageSize, filters);
      if (response.status === "success") {
        setData(response.data || []);
        setTotalPages(response.metaData?.totalPages || 1);
      } else {
        setError(response.errorCode);
        setData([]);
      }
    } catch (error) {
      setError((error as Error).message);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [fetchData]);

  return { data, totalPages, loading, error, getData };
};