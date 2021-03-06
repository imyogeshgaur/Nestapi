import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './user/auth/auth.module';


@Module({ imports: [UserModule, MongooseModule.forRoot('mongodb+srv://imyogeshgaur:imyogeshgaur@cluster0.f7yqn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'), AuthModule] })
export class AppModule { }
