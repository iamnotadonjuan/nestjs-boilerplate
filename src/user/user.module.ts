import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserResolver } from './resolvers/user.resolver';
import { User, UserSchema } from './entities/user.entity';
import { moduleProviders } from 'src/config';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserResolver, ...moduleProviders],
})
export class UserModule {}
