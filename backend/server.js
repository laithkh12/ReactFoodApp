/* Dependencies 
    * mongoose - help to connect with the database
    * jsonwebtoken - create the authentication system
    * bcrypt - encrypt the users data 
    * cors - get the permission to frontend to connect to the backend
    * dotenv - use the enviroment variable in our project
    * body-parser - parse the data coming throw the user 
    * multer - create the image store system 
    * stripe - add the payment getways 
    * validator - check the password or email if its valid 
    * nodemon - when we save our project the server will rerestarted
*/

// express server
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRouter.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// app config
const app = express()
const PORT = 4000

// middleware
app.use(express.json())
app.use(cors())

// DB connection
connectDB()

// API endpoints
app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))
// set up user router
app.use('/api/user',userRouter)
// initialize cart router
app.use("/api/cart",cartRouter)
// initialize order router\
app.use("/api/order",orderRouter)


app.get('/',(req,res)=>{
    res.send("API working")
})

// run the server
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})

