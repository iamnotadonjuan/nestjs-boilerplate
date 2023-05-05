import { TUser } from 'src/common/types/user.types';

export interface IUserService {
  getUser(fields: string[]): Promise<Partial<TUser>>;
}
