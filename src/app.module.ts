import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserRepository } from './user/repositories/user.repository';
import { IUserRepository } from './user/interfaces/user.repository';
import { SymbolUserRepository, UserService } from './user/services/user.service';
import { IUserService, UserSymbolRepository } from './user/interfaces/user.service';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
      }),
    UserModule,
  ],
  providers: [
    {
        provide: UserSymbolRepository,
        useValue: UserService,
    },
    {
        provide: SymbolUserRepository,
        useValue: UserRepository,
    }
  ]
})
export class AppModule {}
