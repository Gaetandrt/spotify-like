export type AutocompleteData = {
  label: string,
  value : string
}

export type SortType = 'asc' | 'desc'

export type SortBy = {
  key: string,
  desc: SortType
}

export type Filters = {
  [key: string]: string
}
