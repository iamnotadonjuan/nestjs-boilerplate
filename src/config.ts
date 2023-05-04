export const TYPES = {
  IUserService: Symbol.for('IUserService'),
  IUserRepository: Symbol.for('IUserRepository'),
}

import { Provider } from '@nestjs/common';
import { UserService } from './user/services/user.service';
import { UserRepository } from './user/repositories/user.repository';

export const moduleProviders: Provider[] = [
  {
    provide: TYPES.IUserRepository,
    useClass: UserRepository
  },
  {
    provide: TYPES.IUserService,
    useClass: UserService
  }
];
