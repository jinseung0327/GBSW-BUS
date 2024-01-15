import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean } from 'class-validator';

export class BusCheckDto {
  @ApiProperty({
    required: true,
    example: 'name',
    description: '이름',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    required: true,
    example: '010-1234-5678',
    description: '전화번호',
  })
  @IsString()
  readonly phone: string;

  @ApiProperty({
    required: true,
    example: 'true',
    description: '버스탑승여부',
  })
  @IsBoolean()
  readonly busRode: boolean;
}
