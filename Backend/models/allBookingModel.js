import mongoose from 'mongoose';


const allBookingSchema = new mongoose.Schema({
    ptName: {
        type: String,
        required: true
    },
    ptContact: {
        type: Number,
        required: true
    },
    docName: {
        type: String,
        required: true
    },
    bookingDate: {
        type: Date,
        required: true
    },
    ptGender: {
        type: String,
        required: true
    },
    ptAge: {
        type: String,
        required: true
    },
    ptAddress: {
        type: String,
        required: true  
    },

});


const allBookingModel = mongoose.models.allBookingModel || mongoose.model('allBooking', allBookingSchema);

export default allBookingModel;