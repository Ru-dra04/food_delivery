import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect(process.env.DB_TOKEN).then(()=>{
        console.log("DB connected");
    })
}