import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import staffRouter from './routes/staffRoute.js';
import  userRouter  from './routes/userRoute.js';
//import { hashedPassword } from './Hashing/hashAdmin.js';

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
// hashedPassword();
// middleware
app.use(cors());
app.use(express.json());


// api endpoints

app.use('/api/admin', adminRouter);
app.use('/api/staff', staffRouter);
app.use('/api/user', userRouter);


app.get('/', (req,res) => {
    console.log('server running by nodemon');
})


app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
});
