import mongoose, { Document } from "mongoose";
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, any, any>;
export declare class User {
    id: number;
    email: string;
    userName: string;
    password: string;
}
export declare type UserDocument = User & Document;
