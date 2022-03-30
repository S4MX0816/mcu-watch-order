import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
});

export interface User {
  email: string;
  password: string;
  username: string;
}
