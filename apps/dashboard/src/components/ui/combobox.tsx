"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FormControl } from "../ui/form"
import { ControllerRenderProps, UseFormReturn } from "react-hook-form"

interface Data {
  label: string
  value: string
}

type ComboBoxProps = {
  data: Data[]
  form: UseFormReturn<{
    Artist: string;
    Title: string;
    LastName: string;
    Email: string;
  }, any, {
    Artist: string;
    Title: string;
    LastName: string;
    Email: string;
  }>
  field: ControllerRenderProps<{
    Artist: string;
    Title: string;
    LastName: string;
    Email: string;
}, "Artist">
}

export function Combobox({ data, form, field }: ComboBoxProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "w-[200px] justify-between",
              !field.value && "text-muted-foreground"
            )}
          >
            {field.value
              ? data.find(
                (language) => language.value === field.value
              )?.label
              : "Select language"}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder="Search framework..."
            className="h-9"
          />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {data.map((language) => (
              <CommandItem
                value={language.label}
                key={language.value}
                onSelect={() => {
                  form.setValue("Artist", language.value)
                }}
              >
                {language.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    language.value === field.value
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
