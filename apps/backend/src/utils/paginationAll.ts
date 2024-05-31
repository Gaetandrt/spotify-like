import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PaginationDto } from 'src/types/_utils';

export async function paginatedFindAll<T>({
  model,
  pageIndex = 1,
  pageSize = 10,
}): Promise<{ data: T[]; metaData: PaginationDto }> {
  try {
    const skip = (pageIndex - 1) * pageSize;
    const take = pageSize;

    const data = await model.findMany({
      skip,
      take,
      orderBy: { created_at: 'desc' },
    });

    const totalItems = await model.count();
    const totalPages = Math.ceil(totalItems / pageSize);

    const metaData: PaginationDto = {
      pageIndex,
      totalItems,
      totalPages,
      pageSize,
    };

    return { data, metaData };
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      console.error('Error during pagination:', error.message);
      throw new Error('Database error');
    }
    throw error;
  }
}
