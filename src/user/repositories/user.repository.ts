import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../entities/user.entity';
import { IUserRepository } from '../interfaces/user.repository';

@Injectable()
export class UserRepository {
  // constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // async getUsername(): Promise<string> {
  //   const user = await this.userModel.findOne().exec();
  //   const username = user?.username ?? 'Unknown';
  //   return username;
  // }
  async getUsername(): Promise<string> {
    return 'asd'
  }
}
