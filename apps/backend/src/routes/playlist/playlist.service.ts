import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { PrismaClient, playlist } from '@prisma/client'
import { PaginatedResponse, PaginationDto } from 'src/types/_utils';
import { getDownloadUrl } from 'src/utils/get.download.url';
import { paginatedFindAll } from 'src/utils/paginationAll';

const prisma = new PrismaClient();

@Injectable()
export class PlaylistService {
  private supabaseClient: SupabaseClient
  private readonly logger = new Logger(PlaylistService.name);
  constructor(
  ) {
    this.supabaseClient = createClient(process.env.DATABASE_URL, process.env.SUPABASE_SERVICE_KEY)
  }

  async create(createPlaylistDto: playlist): Promise<playlist> {
    try {
      const response = await prisma.playlist.create({
        data: createPlaylistDto,
      });

      return response;
    } catch (error) {
      throw error;
    }
  }

  async uploadFile(file: Express.Multer.File, filename: string): Promise<PaginatedResponse<string>> {
    try {
      const { data, error } = await this.supabaseClient.storage.from('playlists_pp').upload(filename + "_pp", file.buffer, {
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

  async findAll(meta: PaginationDto): Promise<PaginatedResponse<playlist[]>> {
    try {
      const { data, metaData } = await paginatedFindAll<playlist>({
        model: prisma.playlist,
        pageIndex: meta.pageIndex,
        pageSize: meta.pageSize,
      });

      const playlistsWithImageUrl = data.map((playlist) => ({
        ...playlist,
        image_url: getDownloadUrl('playlists_pp', playlist.id.toString() + "_pp"),
      }));

      return { data: playlistsWithImageUrl, metaData }
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(uuid: string) {
    try {
      const response = await prisma.playlist.findUnique({
        where: { id: uuid },
      });

      return response;
    } catch (error) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} artist`;
  }
}
