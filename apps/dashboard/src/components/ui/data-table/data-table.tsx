"use client"

import {
  flexRender,
  type Table as TanstackTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DataTablePagination } from "./data-table-pagination"
import { InputDebounce } from "../input-debounce"
import { DropdownColumns } from "./components/DropdownColumns"
import i18n from "@/translation/i18nInstance"

interface DataTableProps<TData, TValue> {
  table: TanstackTable<TData>
  floatingBar?: React.ReactNode | null
  createButton?: React.ReactNode | null
}

export function DataTable<TData, TValue>({
  table,
  floatingBar = null,
  createButton = null,
}: DataTableProps<TData, TValue>) {
  return (
    <div className="w-full space-y-2.5 overflow-auto p-2">
      <div className="w-full flex justify-end">
        <DropdownColumns<TData> table={table} />
      </div>
      <div className="flex flex-row justify-between">
        <InputDebounce
          placeholder={i18n.t("ArtistDataGrid.Search")}
          onDebounce={(value) => table
            .getColumn("username")
            ?.setFilterValue(value)}
          debounceDelay={300}
          className="max-w-sm"
        />
          {createButton}
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={table.getRowCount()} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-col gap-2.5">
        <DataTablePagination table={table} />
        {table.getFilteredSelectedRowModel().rows.length > 0 && floatingBar}
      </div>
    </div>
  )
}
