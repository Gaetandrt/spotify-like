import { ColumnFiltersState, VisibilityState } from "@tanstack/react-table";

export const serializeTableFilters = (filters: ColumnFiltersState): string => {
  try {
    let serializedFilters = "";

    filters.forEach((filter, index) => {
      serializedFilters += `filters[${filter.id}]=${filter.value}${filters.length - 1 === index ? "" : "&"}`;
    });

    return serializedFilters;
  } catch (error) {
    console.error(error)
    return "";
  }
}

export const parseTableFilters = (filtersStr: string): ColumnFiltersState => {
  try {
    const regex = /filters\[(.*?)\]=([^&]*)/g;
    const filters: ColumnFiltersState = [];
    let match;

    while ((match = regex.exec(filtersStr)) !== null) {
      const key: string = decodeURIComponent(match[1]);
      const value = decodeURIComponent(match[2]);
      filters.push({ id: key, value })
    }
    console.log(filters)
    return filters;
  } catch (error) {
    console.error(error)
    return [];
  }
}

export const handleColumnVisibilityChange = (visibility: VisibilityState) => {
  localStorage.setItem("columnsVisibility", JSON.stringify(visibility));
}