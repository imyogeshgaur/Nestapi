import { UserDocument } from './schema/user.schema';
import { User } from './schema/user.schema';
import { Model } from "mongoose";
import { UserDto } from './userDto.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    getAllUser(): Promise<(User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    getUserById(id: number): Promise<(User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    getUserByName(userName: string): Promise<(User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    createUser(UserDto: UserDto): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    createUserPassHash(UserDto: UserDto): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    updateUser(id: any, UserDto: any): Promise<import("mongodb").UpdateResult>;
    deleteAllUser(): Promise<import("mongodb").DeleteResult>;
    deleteOneUser(id: number): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
