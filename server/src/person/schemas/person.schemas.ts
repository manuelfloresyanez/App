import { Schema } from 'mongoose';

export const PersonSchema = new Schema({
    rut: { type: String, required: true},
    name: { type: String, required: true},
    lastName: { type: String, required: true},
    age: { type: Number, required: true},
    course: { type: String, required: true}
    },
    {versionKey: false}
)