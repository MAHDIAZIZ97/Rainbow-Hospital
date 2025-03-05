import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import upload from './middlewares/multer.js';



// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middleware
app.use(cors());
app.use(express.json());

// api endpoints

app.use('/api/admin', adminRouter);
app.get('/', (req,res) => {
    res.send('Api working successfully by nodemon')
})


app.post("/upload", upload.single("pdf"), (req, res) => {
    const { noticeName } = req.body; 

    if (!req.file) return res.status(400).json({ message: "No file uploaded" });
    if (!noticeName) return res.status(400).json({ message: "Label is required" });

    const fileData = req.file.buffer.toString("base64"); 

    res.json({ message: "File uploaded successfully", noticeName, fileData, fileName: req.file.originalname });
});

app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
});
