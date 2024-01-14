import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BusCheck, BusCheckDocument } from '../schema/busCkeck.schema';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schema/user.schema';

@Injectable()
export class BusService {
  constructor(
    @InjectModel(BusCheck.name) private busCheckModel: Model<BusCheckDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async checkBusRide() {
    const notRodeUsersCheck = await this.busCheckModel
      .find({ busRode: false })
      .select('name phone')
      .exec();
    const notRodeUsersNCheck = await this.userModel
      .find({ busRode: false })
      .select('name phone')
      .exec();
    return {
      status: 200,
      data: notRodeUsersCheck,
      notRodeUsersNCheck,
    };
  }

  async saveBusCheck(busCheckDto: BusCheck) {
    const user = new this.busCheckModel(busCheckDto);
    await user.save();
    return { status: 200, message: 'Successfully checked bus ride.' };
  }
}
