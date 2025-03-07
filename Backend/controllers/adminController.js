import validator from 'validator';
import bcrypt from 'bcrypt';
import {v2 as cloudinary} from 'cloudinary';
import staffModel from '../models/StaffModel.js';
import doctorModel from '../models/doctorModel.js';
import healthPackageModel from '../models/healthPackageModel.js';
import jwt from 'jsonwebtoken';
import otPackageModel from '../models/otPackageModel.js';
import noticeModel from '../models/noticeModel.js';
import fs from 'fs';


// api for adding doctor

const addDoctor = async (req,res) =>{
    try {
        const  {name,speciality, degree, experience,available,availableDays } = req.body;
        const image = req.file;

       if(!name || !speciality || !degree || !experience || !image || !availableDays || !available  ){
           return res.status(400).json({message: 'All fields are required'});
       }

    //    upload image
    const imageUpload = await cloudinary.uploader.upload(image.path, {resource_type: 'image'});
    const imageUrl = imageUpload.secure_url;

    // save to database
    const doctorData = new doctorModel({
        name,
        speciality,
        degree,
        experience,
        image: imageUrl,
        available,
        availableDays,
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
        const { staffName, staffEmail, staffPassword,staffId } = req.body;
        const imageFile = req.file;
        //console.log("File Path Before Upload:", imageFile.path);

        // Validate required fields
        if (!staffName || !staffEmail  || !staffPassword || !staffId || !imageFile) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Validate email uniqueness
        const existingStaff = await staffModel.findOne({ staffEmail });
        if (existingStaff) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Validate password strength
        if (staffPassword.length < 8 ) {
            return res.status(400).json({ message: 'Please enter a strong password' });
        }

        // Hash password properly
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(staffPassword, salt);

        // Upload image to Cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
            resource_type: 'image',
            folder: "staff_images",  // Optional: Store images in a folder
        });

        // Store URL of the uploaded image
        const imageUrl = imageUpload.secure_url;

        // Save staff data to database
        const staffData = new staffModel({
            staffName,
            staffEmail,
            staffId,
            staffPassword: hashedPassword,
            staffImage: imageUrl,
        });

        await staffData.save();
        res.json({ success: true, message: 'Staff added successfully' });

    } catch (error) {
        console.error("Error adding staff:", error); // Debugging log
        res.json({ success: false, message: error.message });
    }
};



// api for adding health package

const addHealthPackage = async (req,res) => {
     try{
          const {name, originalPrice, discountedPrice, description,remarks} = req.body;
        //   validation
        if( !name || !originalPrice || !discountedPrice || !description){
             return res.status(400).json({message: 'All fields are required'});
        }
        const healthPackageData = new healthPackageModel({
             name,
             originalPrice,
             discountedPrice,
             description,
             remarks,
        });

        await healthPackageData.save();
        res.status(200).json({success:true,message: 'Health package added successfully'});


     }
     catch(error){
         res.status(500).json({success:false,message: error.message});
     }
}

// api for adding ot  packages

const addOtPackage = async (req,res) => {
    try{
        const {name, price, department, remarks} = req.body;
        //   validation
        if(!name ||!price ||!department){
             return res.status(400).json({message: 'All fields are required'});
        }
        const otPackageData = new otPackageModel({
             name,
             price,
             department,
             remarks,
        });

        await otPackageData.save();
        res.status(200).json({success:true,message: 'Ot package added successfully'});
     }
     catch(error){
         res.status(500).json({success:false,message: error.message});
     }
}

// api for adding notice
const addNotice = async (req,res) => {
    try {
        const {name} = req.body;
        const file  = req.file;
        if(!name || !file){
            return res.status(400).json({message: 'All fields are required'});
        }

        const fileUpload = await cloudinary.uploader.upload(file.path, {resource_type: 'raw'});
        const fileUrl = fileUpload.secure_url;

        const noticeData = new noticeModel({
            name,
            file: fileUrl,
        });

        await noticeData.save();
        fs.unlinkSync(file.path);
        res.status(200).json({success:true, message: 'Notice added successfully'});
    } catch (error) {
        res.status(500).json({success:false,message: error.message});
    }
}


// api for show notice
const allNotices = async (req, res) => {
    try {
        const notices = await noticeModel.find({});
        res.json({success:true,notices});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
    }
}
// api for patient booking from patient portal (userendPanel)

const bookAppointment = async (req,res) => {
    
}

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


// get all staff members
const allStaff = async (req,res) =>{
    try {
        const staffs = await staffModel.find({}).select('-staffPassword');
        res.json({success:true,staffs});   
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
    }
}

//get all doctors

const allDoctors= async (req, res) => {
    try {
        const doctors = await doctorModel.find({});
        res.json({success:true,doctors});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
    }
}

// edit all staff members
// const updateStaff = async (req,res) =>{
//     try {
//         const id = req.params.id;
//         const staffExist = await staffModel.findById({_id:id});
//         if(!staffExist){
//             res.status(404).json({success:false,message: 'Staff not found'});
//         }
//        const updateStaff  = await staffModel.findByIdAndUpdate(id, req.body, {new:true});
//        res.status(201).json({success:true, message:"user updated successfully",updateStaff});
//     }catch (error) {
//         console.log(error.message);
//         res.status(500).json({success:false,message: error.message});
//     }
// }
export {
    addStaff,
    addDoctor,
    adminLogin,
    allStaff,
    allDoctors,
    addHealthPackage,
    addOtPackage,
    addNotice,
    allNotices,
    bookAppointment,
};