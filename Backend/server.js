import express from 'express';
import path from 'path';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import staffRouter from './routes/staffRoute.js';
import  userRouter  from './routes/userRoute.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import http from 'http';
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


// Get the directory name equivalent of __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Static route to serve PDFs
app.use('/uploads/pdfs', express.static(path.join(__dirname, 'uploads/pdfs')));


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
