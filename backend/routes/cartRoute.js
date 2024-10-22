import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { addToCart,removeFromCart,getCart } from '../controllers/cartController.js'

// express router
const cartRouter = express.Router()

//end point for add to cart function
cartRouter.post("/add",authMiddleware,addToCart)

//end point for remove cart function
cartRouter.post("/remove",authMiddleware,removeFromCart)

//end point for get cart function
cartRouter.get("/get",authMiddleware,getCart)

export default cartRouter