import { TUser } from 'src/common/types/user.types';

export interface IUserRepository {
  getUser(fields: string[]): Promise<Partial<TUser>>;
}
