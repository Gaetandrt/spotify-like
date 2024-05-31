import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, ParseFilePipe, FileTypeValidator, MaxFileSizeValidator, Query, ParseIntPipe } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { artist } from '@prisma/client'
import { FileInterceptor } from '@nestjs/platform-express';
import { UseInterceptors } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) { }

  @Public()
  @Post()
  create(@Body() createArtistDto: artist) {
    return this.artistsService.create(createArtistDto);
  }

  @Public()
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpeg)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Body('filename') filename: string,
  ) {
    return this.artistsService.uploadFile(file, filename);
  }

  @Public()
  @Get()
  findAll(
    @Query('page', new ParseIntPipe()) page: number,
    @Query('size', new ParseIntPipe()) size: number,
  ) {
    return this.artistsService.findAll({ pageIndex: page, pageSize: size });
  }

  @Public()
  @Get('autocomplete')
  findAllAutocomplete() {
    return this.artistsService.findAllAutocomplete();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artistsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArtistDto: UpdateArtistDto) {
    return this.artistsService.update(+id, updateArtistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.artistsService.remove(+id);
  }
}
