import mongoose from "mongoose";

const contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false,
        unique: true,
    },
    age:{
        type: String,
        required: true,
    },
    sex:{
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const contactUsModel = mongoose.models.contactUsModel || mongoose.model('contactUs', contactUsSchema);

export default contactUsModel;