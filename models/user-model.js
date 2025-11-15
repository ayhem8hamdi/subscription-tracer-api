import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true, "username is required"], trim: true, minlength: 2, maxlength: 50, },
        email: {
            type: String,
            required: [true, "email is required"],
            unique: true,
            trim: true,
            minlength: 5,
            lowercase: true,
            maxlength: 255,
            match: [/^\S+@\S+\.\S+$/, "Please fill a valid email address"]
        },
        password: {
            required: [true, "Password is required"],
            type: String,
            minlength: [6, "Password minLength should be > 6"]

        }
    },
    { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

export default User;