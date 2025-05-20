import mongoose from 'mongoose';


const allBookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    bookingDate: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true  
    },
    bookingStatus: {
        type: String,
        required: true,
        enum: ['pending','confirmed','cancelled'],
        default: 'pending'
    },
},
    {timestamps: true},);


const allBookingModel = mongoose.models.allBookingModel || mongoose.model('allBooking', allBookingSchema);

export default allBookingModel;