import { Injectable } from '@nestjs/common';
import { UserDocument } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from "mongoose"
import { UserDto } from './userDto.dto';



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

    //Post Request 
    async createUser(UserDto: UserDto) {
        const createdUser = new this.userModel(UserDto);
        return await createdUser.save();
    }

    //Put Request 

    async updateUser(id, UserDto) {
        const userWithId = await this.userModel.updateOne({id }, UserDto);
        return userWithId;
    }

    //Delete Request 

    async deleteAllUser() {
        return this.userModel.remove()
    }
    async deleteOneUser(id: number) {
        return this.userModel.findOneAndRemove({ id })
    }
    
}
