import { Controller, Get, Post, Body } from '@nestjs/common';
import { BusCheck } from '../schema/busCkeck.schema';
import { BusService } from './bus.service';

@Controller('bus')
export class BusController {
  constructor(private readonly busService: BusService) {}

  @Get('check')
  async checkBusRide() {
    return this.busService.checkBusRide();
  }

  @Post('save')
  async saveBusCheck(@Body() busCheckDto: BusCheck) {
    return this.busService.saveBusCheck(busCheckDto);
  }
}
