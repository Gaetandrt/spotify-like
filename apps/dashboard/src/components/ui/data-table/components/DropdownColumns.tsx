"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import {
  type Table as TanstackTable,
} from "@tanstack/react-table"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { LucideSliders } from 'lucide-react';
import i18n from "@/translation/i18nInstance"
import ButtonToolTip from "../../button-tooltip"

type Checked = DropdownMenuCheckboxItemProps["checked"]

type DropdownColumnsProps<TData> = {
  table: TanstackTable<TData>
}

export function DropdownColumns<TData>({ table }: DropdownColumnsProps<TData>) {
  return (
    <DropdownMenu>
      <ButtonToolTip variant="outline" className="h-8 w-8 p-0" size={"icon"} toolText={i18n.t("DataGrid.ColumnsVisibility")}>
        <DropdownMenuTrigger asChild>
          <LucideSliders size={20} />
        </DropdownMenuTrigger>
      </ButtonToolTip>
      <DropdownMenuContent className="w-56 m-2">
        <DropdownMenuLabel>{i18n.t('DataGrid.ColumnsVisibility')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table.getAllColumns().map((column) => {
          const columnDef = column.columnDef as ColumnDef<TData>
          const checked = column.getIsVisible()

          return (
            <DropdownMenuCheckboxItem
              key={column.id}
              checked={checked as Checked}
              onCheckedChange={(checked) => {
                column.toggleVisibility(checked)
              }}
              onSelect={(event: Event) => event.preventDefault()}
            >
              {columnDef.header?.toString()}
            </DropdownMenuCheckboxItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
