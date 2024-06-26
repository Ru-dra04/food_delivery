import userModel from "../models/usermodel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const creToken= (id)=>{
    return jwt.sign({id},process.env.JS_TOKEN)
}
const loginUser= async (req,res)=>{
    const {email,password} =req.body;
    try {
        const user=await userModel.findOne({email:email})
        if(user){
            const isMatch= await bcrypt.compare(password,user.password);
            if(isMatch){
                const token=creToken(user._id);
                res.json({success:true,token})
            }
            else{
                res.json({success:false,message:"Enter valid details"});
            }
        }
        else{
            res.json({success:false,message:"User not found"})
        }
    } catch (error) {
        res.json({success:false,message:"Error"})
    }
}

const registerUser= async (req,res)=>{
    const {name,password,email}=req.body;
    try {
        if(await userModel.findOne({email:email})){
            res.json({success:false,message:"User Already found"})
        }
        else if(!validator.isEmail(email)){
            res.json({success:false,message:"Please Enter a valid Email"})
        }
        else if(password.length<8){
            res.json({success:false,message:"Please Enter a strong password"})
        }
        else{
            const salt=await bcrypt.genSalt(10);
            const hashedPassword=await bcrypt.hash(password,salt);
            const user=new userModel({
                name:name,
                email:email,
                password:hashedPassword
            })
            const newUser= await user.save();
            const token=creToken(newUser._id);
            res.json({success:true,token})
        }
    } catch (error) {
        res.json({success:false,message:"Error"})
    }
}
export {loginUser,registerUser};