import mongoose from "mongoose";

const doctorDetailModel = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctorModel',
        unique: true,
        required: true
    },
    opdTiming: {
        type: String,
        required: true
    },
    aboutDoctor: {
        type: String,
        required: true,
        default: 'Coming Soon..'
    }
}, {timestamps: true})

export default mongoose.model('DoctorDetail', doctorDetailModel);