import mongoose from 'mongoose';


const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    availableDays: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true,
        default: true
    },
},{timestamps: true});


const doctorModel = mongoose.models.doctorModel || mongoose.model('doctors', doctorSchema);

export default doctorModel;