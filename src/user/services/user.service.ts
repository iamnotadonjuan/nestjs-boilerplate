import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from '../interfaces/user.service';
import { IUserRepository } from '../interfaces/user.repository';
import { TYPES } from 'src/config';
import { TUser } from 'src/common/types/user.types';

@Injectable()
export class UserService implements IUserService {
  constructor(@Inject(TYPES.IUserRepository) private readonly userRepository: IUserRepository) {}

  async getUser(fields: string[]): Promise<Partial<TUser>> {
    return this.userRepository.getUser(fields);
  }
}

