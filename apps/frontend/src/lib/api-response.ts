export interface SuccessResponse<T> {
  status: "success";
  statusCode: number;
  data: T;
  path: string;
  metaData?: Metadata;
}

export interface ErrorResponse {
  status: "error";
  statusCode: number;
  errorCode: string;
  details?: ErrorDetails;
  path: string;
}

export interface ErrorDetails {
  fields: Record<string, FieldError>;
}

export interface FieldError {
  code: string;
  target: string;
}

export interface UploadData {
  path: string;
  id: string;
  fullPath: string;
}

export interface Metadata {
  pageIndex?: number
  totalItems?: number
  totalPages?: number
  pageSize?: number
}

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;
