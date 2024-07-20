import foodModel from "../models/foodmodel.js";
import fs from "fs";
import { v2 as cloudinary } from 'cloudinary';
const addFood= async (req,res)=>{
    let image_filename=`${req.file.filename}`;
    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image1:image_filename,
    })
    try{
        cloudinary.config({
            cloud_name:process.env.CLOUD_NAME, 
            api_key:process.env.API_KEY, 
            api_secret:process.env.API_SECRET,
            secure:true
        });
        const result=await cloudinary.uploader.upload(req.file.path);
        
        var re=result.url;
        var ans=re.split('upload/')[1];
        food.image=ans;
        await food.save();
        res.json({success:true,message:"Food Added"})
    }
    catch(err){
        console.log(err)
        res.json({success:false,message:"Error"})
    }
}

const findFood=async(req,res)=>{
    try{
        const foods=await foodModel.find({})
        res.json({success:true,data:foods})
    }
    catch(err){
        console.log(err);
        res.json({success:false,message:"error"})
    }
}
const removeFood=async(req,res)=>{
    try {
        const food= await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image1}`,()=>{})
        cloudinary.config({
            cloud_name:process.env.CLOUD_NAME, 
            api_key:process.env.API_KEY, 
            api_secret:process.env.API_SECRET,
            secure:true
        });
        var re=food.image;
        var ans=re.split('/')[1];
        var ans1=ans.split('.')[0];
        
        await cloudinary.uploader.destroy(ans1)
        const rem= await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Removed Succesfully"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

export {addFood,findFood,removeFood}