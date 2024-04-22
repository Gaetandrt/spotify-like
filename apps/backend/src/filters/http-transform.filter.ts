import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";
import { ApiResponse } from "src/types/_utils";

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, ApiResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<ApiResponse<T>> {
    return next.handle().pipe(
      map(data => ({
        status: 'success',
        statusCode: context.switchToHttp().getResponse().statusCode,
        data: data,
        path: context.switchToHttp().getRequest().url,
      }))
    );
  }
}
