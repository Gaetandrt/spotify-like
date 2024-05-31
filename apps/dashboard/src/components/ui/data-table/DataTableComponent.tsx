"use client"

import { parseAsInteger, useQueryState } from 'nuqs'
import { useCallback, useEffect, useMemo, useReducer } from "react";
import { ColumnDef, ColumnFiltersState, PaginationState, Updater, VisibilityState, getCoreRowModel, getFilteredRowModel, useReactTable } from "@tanstack/react-table";
import { ApiResponse } from "@/lib/api-response";
import { DataTable } from "./data-table";
import { useData } from './use-data';

interface DataTableProps<T> {
  fetchData: (pageIndex: number, pageSize: number, filters?: string) => Promise<ApiResponse<T[]>>;
  columns: ColumnDef<T>[];
  defaultVisibility?: VisibilityState;
  createButton?: React.ReactNode;
}

interface State {
  pagination: PaginationState;
  filters: ColumnFiltersState;
  columnVisibility: VisibilityState;
}

type Action =
  | { type: 'SET_PAGINATION'; payload: PaginationState }
  | { type: 'SET_FILTERS'; payload: ColumnFiltersState }
  | { type: 'SET_COLUMN_VISIBILITY'; payload: VisibilityState };

const initialState: State = {
  pagination: { pageIndex: 0, pageSize: 10 },
  filters: [],
  columnVisibility: {},
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_PAGINATION':
      return { ...state, pagination: action.payload };
    case 'SET_FILTERS':
      return { ...state, filters: action.payload };
    case 'SET_COLUMN_VISIBILITY':
      return { ...state, columnVisibility: action.payload };
    default:
      return state;
  }
}

export function DataTableComponent<T>({ fetchData, columns, defaultVisibility = {}, createButton }: DataTableProps<T>) {
  const initialColumnVisibility = useMemo(() => {
    if (typeof window !== 'undefined' && localStorage.getItem("columnVisibility")) {
      return JSON.parse(localStorage.getItem("columnVisibility") as string);
    }
    return defaultVisibility;
  }, [defaultVisibility]);
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    columnVisibility: initialColumnVisibility,
  });

  const { data, totalPages, getData } = useData(fetchData);
  const [pageIndex, setPageIndex] = useQueryState('pageIndex', parseAsInteger.withDefault(1));
  const [pageSize, setPageSize] = useQueryState('pageSize', parseAsInteger.withDefault(10));
  const [filters, setFilters] = useQueryState<ColumnFiltersState>('filters', {
    defaultValue: [],
    serialize: (filters) => JSON.stringify(filters),
    parse: (filters) => JSON.parse(filters),
    clearOnDefault: true,
    eq(a, b) {
      return JSON.stringify(a) === JSON.stringify(b);
    },
  });

  const memoizedColumns = useMemo(() => columns, [columns]);

  const handlePaginationChange = useCallback((updater: Updater<PaginationState>) => {
    const newPagination = typeof updater === 'function' ? updater(state.pagination) : updater;
    dispatch({ type: 'SET_PAGINATION', payload: newPagination });
    setPageIndex(newPagination.pageIndex + 1);
    setPageSize(newPagination.pageSize);
  }, [state.pagination]);

  const handleColumnFiltersChange = useCallback((updater: Updater<ColumnFiltersState>) => {
    const newFilters = typeof updater === 'function' ? updater(state.filters) : updater;
    dispatch({ type: 'SET_FILTERS', payload: newFilters });
    setFilters(newFilters);
  }, [state.filters]);

  const handleColumnVisibilityChange = useCallback((updater: Updater<VisibilityState>) => {
    const newVisibility = typeof updater === 'function' ? updater(state.columnVisibility) : updater;
    dispatch({ type: 'SET_COLUMN_VISIBILITY', payload: newVisibility });
    localStorage.setItem("columnVisibility", JSON.stringify(newVisibility));
  }, [state.columnVisibility]);

  useEffect(() => {
    getData(state.pagination.pageIndex + 1, state.pagination.pageSize, JSON.stringify(state.filters));
  }, [state.pagination, state.filters]);

  useEffect(() => {
    dispatch({ type: 'SET_PAGINATION', payload: { pageIndex: pageIndex - 1, pageSize: pageSize } });
    dispatch({ type: 'SET_FILTERS', payload: filters });
    getData(pageIndex, pageSize, JSON.stringify(filters));
  }, []);


  const table = useReactTable({
    data,
    columns: memoizedColumns,
    state: {
      pagination: state.pagination,
      columnFilters: state.filters,
      columnVisibility: state.columnVisibility,
    },
    onPaginationChange: handlePaginationChange,
    onColumnFiltersChange: handleColumnFiltersChange,
    onColumnVisibilityChange: handleColumnVisibilityChange,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    manualPagination: true,
    pageCount: totalPages,
  });

  return <DataTable table={table} createButton={createButton} />;
}
