import { ApiProperty } from '@nestjs/swagger';

export class CreateArtistDto {
  @ApiProperty({ description: 'The unique ID of the artist.' })
  id: string;

  @ApiProperty({ description: 'The date and time the artist was created.' })
  created_at: Date;

  @ApiProperty({ description: 'Name of the playlist' })
  name: string;

  @ApiProperty({ description: 'Description of the playlist' })
  description: string;

  @ApiProperty({ description: 'Is the playlist private?' })
  private: boolean;

  @ApiProperty({ description: 'Is the playlist collaborative?' })
  collaborative: boolean;
}
