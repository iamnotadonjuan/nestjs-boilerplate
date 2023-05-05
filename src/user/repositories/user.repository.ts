import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../entities/user.entity';
import { IUserRepository } from '../interfaces/user.repository';
import { TUser } from 'src/common/types/user.types';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUser(fields: string[]): Promise<Partial<TUser>> {
    const user = await this.userModel.findOne().select(fields.join(' ')).exec();
    return user;
  }
}
