import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from '../interfaces/user.service';
import { IUserRepository } from '../interfaces/user.repository';
import { TYPES } from 'src/config';

export const SymbolUserRepository = Symbol("IUserRepository");

@Injectable()
export class UserService implements IUserService {
  constructor(@Inject(TYPES.IUserRepository) private readonly userRepository: IUserRepository) {}

  async getUsername(): Promise<string> {
    const username = await this.userRepository.getUsername();
    return username;
  }
}

