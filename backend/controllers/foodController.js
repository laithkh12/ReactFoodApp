import foodModel from '../models/foodModel.js'
import fs from 'fs'

// Add food item
const addFood = async (req,res)=>{

    // using this we will store the uploaded filename in this variable
    let image_filename = `${req.file.filename}`

    // create a new food item using food model
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save()
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// All food list
const listFood = async (req,res)=>{
    try {
        const foods = await foodModel.find({})
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}

// remove food item
const removeFood = async (req,res)=>{
    try {
        /*find foodModel using id */
        const food = await foodModel.findById(req.body.id)

        /*delete the img from folder */
        fs.unlink(`uploads/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Food removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}
    

export {addFood,listFood,removeFood}