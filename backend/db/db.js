import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

export const connectToDb = async() =>{
try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("Successfully connected to mongodb");   

} catch (error) {
    console.log("Failed to connect with mongodb: " + error)
}
}

