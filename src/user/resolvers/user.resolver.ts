import { Resolver, Query, Info } from '@nestjs/graphql';
import { IUserService } from '../interfaces/user.service';
import { Inject } from '@nestjs/common';
import { TYPES } from 'src/config';
import { User } from '../models/user.model';
import { GraphQLResolveInfo } from 'graphql';
import { TUser } from 'src/common/types/user.types';

@Resolver('User')
export class UserResolver {
  constructor(
    @Inject(TYPES.IUserService) private readonly userService: IUserService) {}

  @Query(() => User)
  async username(@Info() info: GraphQLResolveInfo): Promise<Partial<TUser>> {
    try {
      // TODO: move this to a middleware
      const selections = info.fieldNodes[0].selectionSet.selections as any[];
      const fieldNames: string[] = selections.map((selection) => selection.name.value);
      return this.userService.getUser(fieldNames);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to retrieve username');
    }
  }
}
