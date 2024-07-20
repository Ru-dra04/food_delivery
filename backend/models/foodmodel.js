import mongoose from"mongoose";

const food= new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String},
    image1:{type:String,required:true},
    category:{type:String,required:true}
})

const foodModel=mongoose.models.food||mongoose.model("food",food);
export default foodModel;