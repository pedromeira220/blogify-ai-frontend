export interface PaginatedApiResponse<Data> {
  content: Data[]
  empty: boolean
  offset: number
  pageNumber: number
  pageSize: number
  last: boolean
  totalPages: number
  totalElements: number
  first: boolean
}
