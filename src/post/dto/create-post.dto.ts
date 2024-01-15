import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    required: true,
    example: 'title',
    description: '제목',
  })
  @IsString()
  readonly title: string;

  @ApiProperty({
    required: true,
    example: 'description',
    description: '내용',
  })
  @IsString()
  readonly content: string;

  @ApiProperty({
    required: true,
    example: 'image',
    description: '이미지',
  })
  @IsString()
  imagePath: string;
}
