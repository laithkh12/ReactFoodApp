import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

// login user
const loginUser = async (req,res)=>{
    const {email,password} = req.body
    try {
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({succes:false,message:"User not found"})
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({succes:false,message:"Invalid email or password"})
        }

        const token = createToken(user._id)
        res.json({succes:true,token})
    } catch (error) {
        console.log(error);
        res.json({succes:false,message:"Error"})
        
    }
}

// create the token for the user
const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

// register user
const registerUser = async (req,res)=>{
    const {name,password,email} = req.body
    try {
        // checking if the user exists
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({succes:false,message:"User already exists"})
        }

        // validate email format and strong password
        if(!validator.isEmail(email)){
            return res.json({succes:false,message:"Please enter a valid email"})
        }

        if(password.length < 8){
            return res.json({succes:false,message:"Please enter a strong password"})
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new  userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({succes:true,token})

    } catch (error) {
        console.log(error);
        res.json({succes:false,message:"Error"})
        
    }
}

export {loginUser,registerUser}