import { ApiProperty } from '@nestjs/swagger';

export class CreateArtistDto {
  @ApiProperty({ description: 'The unique ID of the artist.' })
  id: string;

  @ApiProperty({ description: 'The date and time the artist was created.' })
  created_at: Date;

  @ApiProperty({ description: 'The ID of the image associated with the artist.' })
  image_id: string;

  @ApiProperty({ description: 'The unique username of the artist.' })
  username: string;

  @ApiProperty({ description: 'The first name of the artist.' })
  first_name: string;

  @ApiProperty({ description: 'The last name of the artist.' })
  last_name: string;

  @ApiProperty({ description: 'The email of the artist.' })
  email: string;
}
