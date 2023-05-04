export interface IUserRepository {
  getUsername(): Promise<string>;
}
