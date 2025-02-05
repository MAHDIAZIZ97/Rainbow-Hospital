import validator from 'validator';
import bcrypt from 'bcrypt';
import {v2 as cloudinary} from 'cloudinary';
import staffModel from '../models/StaffModel.js';
import doctorModel from '../models/doctorModel.js';
import jwt from 'jsonwebtoken';


// api for adding doctor

const addDoctor = async (req,res) =>{
    try {
        const  {name,speciality, degree, experience } = req.body;
        const imageFile = req.file;

       if(!name || !speciality || !degree || !experience || !imageFile){
           return res.status(400).json({message: 'All fields are required'});
       }

    //    upload image
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: 'image'});
    const imageUrl = imageUpload.secure_url;

    // save to database
    const doctorData = new doctorModel({
        name,
        speciality,
        degree,
        experience,
        image: imageUrl,
        date: Date.now(),
    });

    await doctorData.save();
    res.status(200).json({success:true, message: 'Doctor added successfully'});
        
        
    } catch (error) {
        res.status(500).json({success:false,message: error.message});
    }
}





// adding staff api
const addStaff = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const imageFile = req.file;

        if (!name || !email || !password || !imageFile) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Validate password
        if (password.length < 8 || !validator.isStrongPassword(password)) {
            return res.status(400).json({ message: 'Please enter a strong password' });
        } 

        // Hash password properly
        const salt = await bcrypt.genSalt(10);  // Await is needed here
        const hashedPassword = await bcrypt.hash(password, salt);

        // Upload image
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
        const imageUrl = imageUpload.secure_url;

        // Save to database
        const staffData = new staffModel({
            name,
            email,
            password: hashedPassword,
            image: imageUrl,
            date: Date.now(),
        });

        await staffData.save();
        res.json({ success: true, message: 'Staff added successfully' });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// api for admin login

const adminLogin = async (req,res) =>{
    try{
            const {email,password} = req.body;
            if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
                const token = jwt.sign(email + password , process.env.JWT_SECRET);
                res.json({success:true,token});
        }
            else{
                res.json({success:false,message:'Invalid credentials'});
            }
    }
    catch(error){
        res.status(500).json({success:false,message: error.message});
    }
}

export {addStaff,addDoctor,adminLogin};