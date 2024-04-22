import { Injectable } from '@nestjs/common';
import { PrismaClient, track } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class TracksService {
  create(newTrack: track): Promise<track> {
    return prisma.track.create({
      data: newTrack,
    });
  }

  findAll(): Promise<track[]> {
    return prisma.track.findMany();
  }


  findOne(id: string): Promise<track | null> {
    return prisma.track.findUnique({
      where: { id },
    });
  }

  update(id: string, updateTrackDto: Partial<track>): Promise<track | null> {
    return prisma.track.update({
      where: {id},
      data: updateTrackDto
    })
  }

  remove(id: string): Promise<track | null>  {
    return prisma.track.delete({
      where: {id},
    });
  }
}
