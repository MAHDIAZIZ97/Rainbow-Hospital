import allBookingModel from "../models/allBookingModel.js";
import allEnquiryModel from "../models/allEnquiryModel.js";
import contactUsModel from "../models/contactUsModel.js";   
import doctorModel from "../models/doctorModel.js";
import noticeModel from "../models/noticeModel.js";

const getAllDoctors = async (req,res) =>{
    try {
        const doctors = await doctorModel.find({});
        res.json({success:true, doctors});   
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
    }
}
const getAllNotices = async (req,res) =>{
    try {
        const notices = await noticeModel.find({});
        res.json({success:true, notices});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
    }
}

const submitBookAppointment = async (req,res) =>{
    // console.log(req.body);
    // res.json(req.body);
    try {
        const {name,mobile,doctor,bookingDate,age,gender,address} = req.body;
        if(!name || !mobile || !doctor || !bookingDate || !age || !gender || !address){
            return res.status(400).json({success:false,message:"Please fill all the fields"});
        }
        const newBookAppointment = new allBookingModel({
            name,
            mobile,
            doctor,
            bookingDate,
            age,
            gender,
            address
        });

        await newBookAppointment.save();
        res.status(200).json({success:true,message:"Submitted successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
        
    }
}
const submitEnquiry = async (req,res) =>{
    try {
        const {name,enquiryDate,time,doctor,age,sex,address,mobile} = req.body;
        if(!name || !enquiryDate || !time  || !age || !sex || !address || !mobile){
            return res.status(400).json({success:false,message:"Please fill all the fields"});
        }
        const newEnquiry = new allEnquiryModel({
            name,
            enquiryDate,
            time,
            doctor,
            age,
            sex,
            address,
            mobile
        });
        await newEnquiry.save();
        res.status(200).json({success:true,message:"Submitted successfully"});   
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
        
    }
}
const getAllAppointments = async (req,res) =>{
    try {
        const appointments = await allBookingModel.find();
        await res.json({success:true, appointments});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
        
    }
}
const getAllEnquiries = async (req,res) =>{
    try {
        const enquiries = await allEnquiryModel.find();
        res.json({success:true, enquiries});
    } catch (error) {
        console.log(error.message);
        await res.status(500).json({success:false,message: error.message});
        
    }
}
const submitContactUs = async (req,res) =>{
    try {
        const {name,mobile,email,age,sex,message} = req.body;
        if(!name || !mobile || !age || !sex || !message){
            return res.status(400).json({success:false,message:"Please fill all the fields"});
        }
        const newContactUs = new contactUsModel({
            name,
            mobile,
            email,
            age,
            sex,
            message
        });
        await newContactUs.save();
        res.status(200).json({success:true,message:"Submitted successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
        
    }
}
const getAllContactUs = async (req,res) =>{
    try {
        const contactUs = await contactUsModel.find();
        await res.json({success:true, contactUs});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
        
    }
}

const updateBookAppointment = async (req,res) =>{
}
const updateEnquiry = async (req,res) =>{

}
const deleteBookAppointment = async (req,res) =>{
    try {
        const {id} = req.params.id;
        const appointmentExists = await allBookingModel.findById(id);
        if(!appointmentExists){
            return res.status(404).json({success:false,message:"Appointment not found"});
        }
        await allBookingModel.deleteOne({_id:id});
        res.status(200).json({success:true,message:"Deleted successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
        
    }
}
const deleteBulkBookAppointment = async (req,res) =>{
    try {
        const {ids} = req.body;
        if(!ids || ids.length === 0){
            return res.status(400).json({success:false,message:"Please select at least one appointment"});
        }
        await allBookingModel.deleteMany({_id: {$in: ids}});
        res.status(200).json({success:true,message:"Deleted successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
        
    }
}
const deleteEnquiry = async (req,res) =>{
    try {
        const {id} = req.params.id;
        await allEnquiryModel.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Deleted successfully"});
    }
     catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
        
    }
}
const deleteBulkEnquiry = async (req,res) =>{
    try {
        const {ids} = req.body;
        if(!ids || ids.length === 0){
        return res.status(400).json({success:false,message:"Please select at least one enquiry"});
    }
    await allEnquiryModel.deleteMany({_id: {$in: ids}});
    res.status(200).json({success:true,message:"Deleted successfully"});
    } 
    catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
    }
}
const deleteContactUs = async (req,res) =>{
    try {
        const {id} = req.params.id;
        await contactUsModel.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Deleted successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
        
    }
}
const deleteBulkContactUs = async (req,res) =>{
    try {
        const {ids} = req.body;
        if(!ids || ids.length === 0){
            return res.status(400).json({success:false,message:"Please select at least one contact"});
        }
        await contactUsModel.deleteMany({_id: {$in: ids}});
        res.status(200).json({success:true,message:"Deleted successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
    }
}

export {
    getAllDoctors,
    getAllNotices,
    submitBookAppointment,
    submitEnquiry,
    getAllAppointments,
    getAllEnquiries,
    submitContactUs,
    getAllContactUs,
    updateBookAppointment,
    updateEnquiry,
    deleteBookAppointment,
    deleteBulkBookAppointment,
    deleteEnquiry,
    deleteBulkEnquiry,
    deleteContactUs,
    deleteBulkContactUs
}