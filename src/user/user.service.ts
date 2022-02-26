import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDocument } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from "mongoose"
import { UserDto } from './userDto.dto';
import { LargeNumberLike } from 'crypto';


@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }
    //Get Request 
    async getAllUser(){
        const allUsers = await this.userModel.find();
        return allUsers;
    }
    async getUserById(id:number){
       const userWithId = await this.userModel.find({id});
       return userWithId
    }

    //Post Request 
    async createUser(UserDto: UserDto){
        try {
            const createdUser = new this.userModel(UserDto);
            return await createdUser.save();
        } catch (error) {
            throw new HttpException("Internal Server Error !!!",HttpStatus.BAD_GATEWAY)
        }
    }

    //Put Request 

    async updateUser(id,UserDto){
        const userWithId = await this.userModel.findByIdAndUpdate({_id:id},UserDto);
        return userWithId;
    }

    //Delete Request 

    async deleteAllUser(){
        return this.userModel.remove()
    }
    async deleteOneUser(_id:number){
        return this.userModel.findByIdAndDelete({_id})
    }
}
