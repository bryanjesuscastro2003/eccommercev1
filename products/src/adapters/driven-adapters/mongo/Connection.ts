import mongoose from "mongoose";
import "dotenv.config";

export const connection = async (): Promise<void> => {
    try {
        if(process.env.MONGO_URI == undefined) 
                    throw new Error("Invalid mongo connection")
        console.log("Connection db")
        await mongoose.connect(process.env.MONGO_URI!)
    }catch(e){
        console.log("Error connecting db")
        throw e;
    }   
}