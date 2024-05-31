import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, ParseFilePipe, FileTypeValidator, MaxFileSizeValidator, Query, ParseIntPipe } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { playlist } from '@prisma/client'
import { FileInterceptor } from '@nestjs/platform-express';
import { UseInterceptors } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';

@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) { }

  @Public()
  @Post()
  create(@Body() createArtistDto: playlist) {
    return this.playlistService.create(createArtistDto);
  }

  @Public()
  @Get()
  findAll(
    @Query('page', new ParseIntPipe()) page: number,
    @Query('size', new ParseIntPipe()) size: number,
  ) {
    return this.playlistService.findAll({ pageIndex: page, pageSize: size });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playlistService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playlistService.remove(+id);
  }
}
