import { Controller, Get, Post, Body } from '@nestjs/common';
import { BusService } from './bus.service';
import { BusCheckDto } from './dto/bus-check.dto';
import {
  ApiBearerAuth,
  ApiResponse,
  ApiSecurity,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiSecurity('basic')
@ApiTags('Bus')
@Controller('bus')
export class BusController {
  constructor(private readonly busService: BusService) {}

  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @ApiResponse({
    status: 500,
    description: '서버 에러',
  })
  @ApiOperation({ summary: '버스 미 탑승 인원체크' })
  @Get('check')
  async checkBusRide() {
    return this.busService.checkBusRide();
  }

  @ApiResponse({
    status: 200,
    description: '성공',
  })
  @ApiResponse({
    status: 500,
    description: '서버 에러',
  })
  @ApiOperation({ summary: '버스 탑승 여부 제출' })
  @Post('save')
  async saveBusCheck(@Body() busCheckDto: BusCheckDto) {
    return this.busService.saveBusCheck(busCheckDto);
  }
}
