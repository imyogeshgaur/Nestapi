import mongoose, { Document } from "mongoose";
import { ObjectUnsubscribedError } from "rxjs";


export const UserSchema = new mongoose.Schema({
  userId: Number,
  email: String,
  userName: String,
  password: String
});

export class User {
  userId: number;
  email: string;
  userName: string;
  password: string
}

export type UserDocument = User & Document;
