import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { Response, Request } from 'express';

const defaultErrorResponses = {
  P2000: { status: HttpStatus.BAD_REQUEST, errorCode: "InputDataTooLong", fieldError: true, message: "Input data is too long" },
  P2001: { status: HttpStatus.NOT_FOUND, errorCode: "RecordNotFound", fieldError: false, message: "Record not found" },
  P2002: { status: HttpStatus.CONFLICT, errorCode: "UniqueConstraintFailed", fieldError: true, message: "Unique constraint failed" },
  P2003: { status: HttpStatus.BAD_REQUEST, errorCode: "InvalidInputData", fieldError: true, message: "Input data is invalid" },
};

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    console.error('Prisma error:', exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const { status, errorCode, fieldError } = defaultErrorResponses[exception.code] || {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      errorCode: 'UnexpectedError',
      fieldError: false,
    };

    let details = {};

    // Ensure meta.target is an array before attempting to use 'reduce'
    if (fieldError && exception.meta?.target && Array.isArray(exception.meta.target)) {
      const targets = exception.meta.target as string[];  // Asserting that target is a string array
      details = {
        fields: targets.reduce((acc, field) => {
          acc[field] = { code: errorCode, target: field };
          return acc;
        }, {})
      };
    }

    response.status(status).json({
      status: 'error',
      statusCode: status,
      errorCode: errorCode,
      details: details,
      path: request.url,
    });
  }
}
