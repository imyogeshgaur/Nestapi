import { Injectable } from '@nestjs/common';
import { UserDocument } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from "mongoose"
import { UserDto } from './userDto.dto';
import * as bcrypt from 'bcrypt'


@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }
    //Get Request 
    async getAllUser() {
        const allUsers = await this.userModel.find();
        return allUsers;
    }
    async getUserById(id: number) {
        const userWithId = await this.userModel.find({ id });
        return userWithId
    }
    async getUserByName(userName: string) {
        const userWithNumber = await this.userModel.find({ userName });
        return userWithNumber
    }

    //Post Request 
    async createUser(UserDto: UserDto) {
        const createdUser = new this.userModel(UserDto);
        return await createdUser.save();
    }
    //With Hash
    async createUserPassHash(UserDto: UserDto) {
        const createdUser = new this.userModel(UserDto);
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(UserDto.password, saltOrRounds);
        createdUser.password = hash;
        return await createdUser.save();
    }

    //Put Request 

    async updateUser(id, UserDto) {
        const userWithId = await this.userModel.updateOne({ id }, UserDto);
        return userWithId;
    }

    //Delete Request 

    async deleteAllUser() {
        return this.userModel.deleteMany()
    }
    async deleteOneUser(id: number) {
        return this.userModel.findOneAndRemove({ id })
    }

}
