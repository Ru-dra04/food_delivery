import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config"
import cartRouter from "./routes/CartRoute.js";
import OrderRouter from "./routes/OrderRoute.js";
const app=express();
app.use(express.json());
app.use(cors());

connectDB();
app.use("/api/food",foodRouter)
app.use('/api/user',userRouter);
app.use('/api/cart',cartRouter);
app.use('/api/order',OrderRouter);
app.use("/images",express.static("uploads"))

app.get('/',(req,res)=>{
    res.send("API Working");
})
app.listen(4000,()=>{
    console.log("Connected on port 4000");
})

