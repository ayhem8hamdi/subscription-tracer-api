import mongoose from 'mongoose';
import { MONGO_URI } from "../config/env.js";


if (!MONGO_URI) {
    throw new Error("Please Define the mongodb URI inside the .env file");
}
const connectToDatabase = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Data Base Connected Successfully !");
    } catch (error) {
        console.log("error connecting to DB", error);
        process.exit(1);
    }
}

export default connectToDatabase;