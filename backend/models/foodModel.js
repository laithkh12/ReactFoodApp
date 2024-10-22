import mongoose from "mongoose";

// Create the schema
const foodSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

// create the model
// * check if the model is found or create new one
const foodModel = mongoose.models.food ||  mongoose.model("food",foodSchema)

export default foodModel 