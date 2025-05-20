import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    enquiryDate: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: false
    },
    age: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending'
    },
}, { timestamps: true });

const allEnquiryModel = mongoose.models.allEnquiryModel || mongoose.model('allEnquiry', enquirySchema);

export default allEnquiryModel;