import doctorModel from "../models/doctorModel.js";

const getAllDoctors = async (req,res) =>{
    try {
        const doctors = await doctorModel.find({});
        res.json({success:true, doctors});   
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: error.message});
    }
}

export {
    getAllDoctors,
}