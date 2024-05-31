import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiResponse, PaginationDto } from "src/types/_utils";

type Response<T> = {
  data: T;
  metaData?: PaginationDto;
};

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, ApiResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<ApiResponse<T>> {
    return next.handle().pipe(
      map((response: T) => {
        const { data, metaData } = response as unknown as Response<T>;
        return {
          status: 'success',
          statusCode: context.switchToHttp().getResponse().statusCode,
          data: data,
          metaData: metaData ? metaData : undefined,
          path: context.switchToHttp().getRequest().url,
        };
      })
    );
  }
}