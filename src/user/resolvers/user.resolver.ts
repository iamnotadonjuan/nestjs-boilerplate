import { Resolver, Query } from '@nestjs/graphql';
import { IUserService } from '../interfaces/user.service';
import { Inject } from '@nestjs/common';
import { TYPES } from 'src/config';
import { User } from '../models/user.model';

@Resolver('User')
export class UserResolver {
  constructor(
    @Inject(TYPES.IUserService) private readonly userService: IUserService) {}

  @Query(() => User)
  async username(): Promise<string> {
    return this.userService.getUsername();
  }
}
