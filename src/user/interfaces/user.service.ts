export interface IUserService {
  getUsername(): Promise<string>;
}

export const UserSymbolRepository = Symbol("IUserService");
