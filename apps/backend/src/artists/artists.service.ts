import { Injectable, Logger } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { PrismaClient, artist } from '@prisma/client'
import { UpdateArtistDto } from './dto/update-artist.dto';

const prisma = new PrismaClient();

@Injectable()
export class ArtistsService {
  private supabaseClient: SupabaseClient
  private readonly logger = new Logger(ArtistsService.name);
  constructor(
  ) {
    this.supabaseClient = createClient(process.env.DATABASE_URL, process.env.SUPABASE_SERVICE_KEY)
  }


  create(createArtistDto: artist): Promise<artist> {
    return prisma.artist.create({
      data: createArtistDto,
    });

  }

  async uploadFile(file: Express.Multer.File, filename: string) {
    try {
      const { data, error } = await this.supabaseClient.storage.from('artists_pp').upload("test.png", file.buffer, {
        cacheControl: '3600',
        upsert: true,
        contentType: file.mimetype,
      });

      return data
    } catch (error) {
      this.logger.error('Error uploading file to supabase', error.message)
      throw error
    }
  }

  findAll() {
    return `This action returns all artists`;
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
