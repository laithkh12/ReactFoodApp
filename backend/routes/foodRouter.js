import express from 'express'
import { addFood, listFood, removeFood } from '../controllers/foodController.js'
import multer from 'multer'

// Create express router
const foodRouter = express.Router()

// create the logic to save the image in upload s folder
// image storage engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

// middleware - store the image in the uploads folder 
const upload = multer({storage:storage})

// POST request  
foodRouter.post('/add', upload.single("image"), addFood);
foodRouter.get('/list',listFood)
foodRouter.post('/remove',removeFood)


export default foodRouter