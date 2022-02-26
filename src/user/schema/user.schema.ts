import mongoose, { Document } from "mongoose";
import { ObjectUnsubscribedError } from "rxjs";


export const UserSchema = new mongoose.Schema({
  id: Number,
  email: String,
  userName: String,
  password: String
});

export class User {
  id: number;
  email: string;
  userName: string;
  password: string
}

export type UserDocument = User & Document;
