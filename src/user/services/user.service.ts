import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from '../interfaces/user.service';
import { IUserRepository } from '../interfaces/user.repository';

export const SymbolUserRepository = Symbol("IUserRepository");

@Injectable()
export class UserService implements IUserService {
  constructor(@Inject(SymbolUserRepository) private readonly userRepository: IUserRepository) {}

  async getUsername(): Promise<string> {
    const username = await this.userRepository.getUsername();
    return username;
  }
}

