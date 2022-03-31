import * as mongoose from 'mongoose';

export const McuSchema = new mongoose.Schema({
  name: { type: String, require: true },
  releaseDate: { type: Date, require: true },
});

export interface Mcu {
  name: string;
  releaseDate: Date;
}
