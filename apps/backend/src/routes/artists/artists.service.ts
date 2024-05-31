import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { PrismaClient, artist } from '@prisma/client'
import { UpdateArtistDto } from './dto/update-artist.dto';
import { getDownloadUrl } from 'src/utils/get.download.url';
import { AutcompleteData, PaginatedResponse, PaginationDto } from 'src/types/_utils';
import { paginatedFindAll } from 'src/utils/paginationAll';

const prisma = new PrismaClient();

@Injectable()
export class ArtistsService {
  private supabaseClient: SupabaseClient
  private readonly logger = new Logger(ArtistsService.name);
  constructor(
  ) {
    this.supabaseClient = createClient(process.env.DATABASE_URL, process.env.SUPABASE_SERVICE_KEY)
  }

  async create(createArtistDto: artist): Promise<artist> {
    try {
      const response = await prisma.artist.create({
        data: createArtistDto,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async uploadFile(file: Express.Multer.File, filename: string): Promise<PaginatedResponse<string>> {
    try {
      const { data, error } = await this.supabaseClient.storage.from('artists_pp').upload(filename + "_pp", file.buffer, {
        cacheControl: '3600',
        upsert: true,
        contentType: file.mimetype,
      });

      if (error)
      throw error

      return { data: data.path, metaData: {pageIndex: 1, pageSize: 1, totalItems: 1, totalPages: 1} }
    } catch (error) {
      this.logger.error('Error uploading file to supabase', error.message)
      throw error
    }
  }

  async findAll(meta: PaginationDto): Promise<PaginatedResponse<artist[]>> {
    try {
      const { data, metaData } = await paginatedFindAll<artist>({
        model: prisma.artist,
        pageIndex: meta.pageIndex,
        pageSize: meta.pageSize,
      });

      const artistsWithImageUrl = data.map((artist) => ({
        ...artist,
        image_url: getDownloadUrl('artists_pp', artist.username + '_pp'),
      }));

      return { data: artistsWithImageUrl, metaData };
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllAutocomplete() {
    try {
      const response = await prisma.artist.findMany({ select: { id: true, username: true } })

      let result: AutcompleteData[] = []

      response.forEach((artist) => {
        result.push({label: artist.username, value: artist.id})
      })

      return result;
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} artist`;
  }

  update(id: number, updateArtistDto: UpdateArtistDto) {
    return `This action updates a #${id} artist`;
  }

  remove(id: number) {
    return `This action removes a #${id} artist`;
  }
}
