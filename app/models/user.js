import mongoose, { Schema } from "mongoose";
import MongooseDelete from 'mongoose-delete'

const userSchema = new Schema({
    userName: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    gender: { type: String, required: true, enum: ["male", "female"], default: "male    " },
    dateOfBirth: { type: String, required: true },
    country: { type: String, required: true },
    email: { type: String, required: true },
    deleted: { type: Boolean, default: false }
}, { timestamps: true });

userSchema.plugin(MongooseDelete, { deletedAt: true, overrideMethods: ['count', 'countDocuments', 'find'] })

export default mongoose.model("User", userSchema);