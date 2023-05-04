import { Resolver, Query } from '@nestjs/graphql';
import { IUserService, UserSymbolRepository } from '../interfaces/user.service';
import { Inject } from '@nestjs/common';

@Resolver('User')
export class UserResolver {
  constructor(
    @Inject(UserSymbolRepository) private readonly userService: IUserService) {}

  @Query()
  async username(): Promise<string> {
    return this.userService.getUsername();
  }
}
