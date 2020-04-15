import { Schema } from 'mongoose';

export const PersonSchema = new Schema({
    rut: { type: String, required: true},
    name: String,
    lastName: String,
    age: Number,
    course: String
})