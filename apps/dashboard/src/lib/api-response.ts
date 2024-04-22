export interface SuccessResponse<T> {
  status: "success";
  statusCode: number;
  data: T;
  path: string;
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

export interface UploadResponse {
  path: string;
  id: string;
  fullPath: string;
}

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;
