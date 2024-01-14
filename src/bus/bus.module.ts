import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusCheck, BusCheckSchema } from '../schema/busCkeck.schema';
import { User, UserSchema } from '../schema/user.schema';
import { BusService } from './bus.service';
import { BusController } from './bus.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BusCheck.name, schema: BusCheckSchema },
    ]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [BusService],
  controllers: [BusController],
})
export class BusModule {}
