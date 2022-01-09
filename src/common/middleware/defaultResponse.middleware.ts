import { CallHandler, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { TDefaultResponse } from 'src/common/middleware/defaultResponse/types';

@Injectable()
class DefaultResponseMiddleware implements NestInterceptor {
  intercept(_, next: CallHandler): Observable<TDefaultResponse> {
    return next.handle().pipe(
      map((data) => ({
        statusCode: 200,
        data,
      })),
    );
  }
}

export default DefaultResponseMiddleware;
