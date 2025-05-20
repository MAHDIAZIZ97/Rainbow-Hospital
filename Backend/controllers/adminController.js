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
import doctorDetailModel from '../models/doctorDetailModel.js';


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
        const { name,email,id,password } = req.body;
        const imageFile = req.file;
        //console.log("File Path Before Upload:", imageFile.path);

        // Validate required fields
        if (!name || !email  || !password || !id || !imageFile) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Validate email uniqueness
        const existingStaff = await staffModel.findOne({ email });
        if (existingStaff) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Validate password strength
        if (password.length < 8 ) {
            return res.status(400).json({ message: 'Please enter a strong password' });
        }

        // Hash password properly
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Upload image to Cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
            resource_type: 'image',
            folder: "staff_images",  // Optional: Store images in a folder
        });

        // Store URL of the uploaded image
        const imageUrl = imageUpload.secure_url;

        // Save staff data to database
        const staffData = new staffModel({
            name,
            email,
            id,
            password: hashedPassword,
            image: imageUrl,
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
            return res.status(400).json({success:false, message: 'All fields are required'});
        }
        const noticeData = new noticeModel({
            name,
            file:file.filename,
        });

        await noticeData.save();

       return res.status(200).json(
        {
            success:true,
            message: 'Notice added successfully',
            path: file.path,
            fileName: file.filename,
        }
       );
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
// api for patient booking from patient portal (useRendPanel)

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

const allHealthPackages = async (req,res) => {
    try {
        const healthPackages = await healthPackageModel.find({});
        res.json({success:true,healthPackages});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
    }
}

const allOtPackages = async (req,res) => {
     try {
        const otPackages = await otPackageModel.find({});
        res.json({success:true,otPackages});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
    }
}

const findDoctor = async (req, res) => {
    const id = req.params.id;
    const doctorExist = await doctorModel.findById(id);
    if(!doctorExist){
        res.status(404).json({success:false,message: 'Doctor not found'});
    }
    res.status(200).json({success:true,doctor:doctorExist});
}
const updateDoctor = async (req, res) =>{
    try {
        const id = req.params.id;
        const doctorExist = await doctorModel.findById(id);
        if(!doctorExist){
            res.status(404).json({success:false,message: 'Doctor not found'});
        }
       const updateDoctor  = await doctorModel.findByIdAndUpdate(id, req.body, {new:true});
       res.status(201).json({success:true, message:"Doctor updated successfully",updateDoctor});
    }catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
    }

}
const findStaff = async (req, res) => {
    const id = req.params.id;
    const staffExist = await staffModel.findById(id);
    if(!staffExist){
        res.status(404).json({success:false,message: 'Staff not found'});
    }
    res.status(200).json({success:true,staff:staffExist});
}

const updateStaff = async (req,res) =>{
    try {
        const id = req.params.id;
        const staffExist = await staffModel.findById(id);
        if(!staffExist){
            res.status(404).json({success:false,message: 'Staff not found'});
        }
       const updateStaff  = await staffModel.findByIdAndUpdate(id, req.body, {new:true});
       res.status(201).json({success:true, message:"User updated successfully",updateStaff});
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
    }
}

const findHealthPackage = async (req, res) => {
    const id = req.params?.id;
    const healthPackageExist = await healthPackageModel.findById({_id:id});
    if(!healthPackageExist){
        res.status(404).json({success:false,message: 'Health package not found'});
    }
    res.status(200).json({success:true,healthPackage:healthPackageExist});
}

const updateHealthPackage = async (req,res) =>{
    try {
        const id = req.params.id;
        const healthPackageExist = await healthPackageModel.findById(id);
        if(!healthPackageExist){
            res.status(404).json({success:false,message: 'Health package not found'});
        }
       const updateHealthPackage  = await healthPackageModel.findByIdAndUpdate(id, req.body, {new:true});
       res.status(201).json({success:true, message:"Health package updated successfully",updateHealthPackage});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
    }
}

const findOtPackage = async (req, res) => {
    const id = req.params.id;
    const otPackageExist = await otPackageModel.findById(id);
    if(!otPackageExist){
        res.status(404).json({success:false,message: 'Ot package not found'});
    }
    res.status(200).json({success:true,otPackage:otPackageExist});
}

const updateOtPackage = async (req,res) =>{
    try {
        const id = req.params.id;
        const otPackageExist = await otPackageModel.findById(id);
        if(!otPackageExist){
            res.status(404).json({success:false,message: 'Ot package not found'});
        }
       const updateOtPackage  = await otPackageModel.findByIdAndUpdate(id, req.body, {new:true});
       res.status(201).json({success:true, message:"Ot package updated successfully",updateOtPackage});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
    }
}

const deleteOtPackages = async (req,res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ success: false, message: "ID is required" });
        }
        const otPackageExist = await otPackageModel.findById({_id:id});
        if(!otPackageExist){
            res.status(404).json({success:false,message: 'Ot package not found'});
        }
        await otPackageExist.deleteOne({_id:id});
        res.status(200).json({success:true, message:"Ot package deleted successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
    }
}

const deleteHealthPackages = async (req, res) => {
    try {
        const id = req.params.id;
        const healthPackageExist = await healthPackageModel.findById(id);

        if (!healthPackageExist) {
            return res.status(404).json({ success: false, message: 'Health package not found' });
        }

        await healthPackageModel.deleteOne({ _id: id });

        res.status(200).json({ success: true, message: "Health package deleted successfully" });
    } catch (error) {
        console.error("Error deleting health package:", error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};
const deleteNotice = async (req, res) => {
    try {
        const id = req.params.id;
        const noticeExist = await noticeModel.findById(id);
        if (!noticeExist) {
            return res.status(404).json({ success: false, message: 'Notice not found' });
        }
        await noticeModel.deleteOne({ _id: id });
        res.status(200).json({ success: true, message: "Notice deleted successfully" });
    } catch (error) {
        console.error("Error deleting notice:", error.message);
        res.status(500).json({ success: false, message: error.message });
    }
}


const addDoctorDetails = async (req,res) => {
   try {
      const {name,opdTiming,aboutDoctor} = req.body;
      if(!name || !opdTiming || !aboutDoctor){
        res.status(400).json({success:false, message:'All fields are required.'})
      }

      const doctorDetail = new doctorDetailModel({
          name,opdTiming,aboutDoctor
      });
    
      await doctorDetail.save();

      res.status(200).json({success:true, message:'Doctor details added successfully.'})

   } catch (error) {
    res.status(400).json({success:false, message:'Error occur.'})
   }
}

const updateDoctorDetails = async (req,res) => {
   try {
    const id = req.params.id;
    const idExists = await doctorDetailModel.findById(id);
    if(!idExists){
        return res.status(400).json({success:false, message:'Id not found.'})
    }
    const updateDoctorDetail = await doctorDetailModel.findByIdAndDelete(id,req.body,{new:true});
    res.status(200).json({success:true, message:'Updated successfully.', updateDoctorDetail});
    
   } catch (error)
    {
       res.status(400).json({success:false,  message:error.message});
   }
}

const deleteDoctorDetails = async (req,res) =>{
   try {
      const id = req.params.id;
      const idExist = await doctorDetailModel.findById(id);
      if(!idExist){
          return res.status(400).json({success:false, message:'Id not found.'})
      }
      await doctorDetailModel.deleteOne({_id:id});
      res.status(200).json({success:true, message:'Deleted successfully.'})

   } catch (error) {
      res.status(400).json({success: false, message: error.message})
   }
}

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
    updateStaff,
    findStaff,
    findDoctor,
    updateDoctor,
    allHealthPackages,
    allOtPackages,
    deleteHealthPackages,
    deleteOtPackages,
    findHealthPackage,
    updateHealthPackage,
    findOtPackage,
    updateOtPackage,
    deleteNotice,
    addDoctorDetails,
    updateDoctorDetails,
    deleteDoctorDetails
};