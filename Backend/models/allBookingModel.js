import mongoose from 'mongoose';


const allBookingSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Contact: {
        type: Number,
        required: true
    },
    Doctor: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Doctor',
        type: String,
        required: true
    },
    BookingDate: {
        type: Date,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    Age: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true  
    },
    BookingStatus: {
        type: String,
        required: true,
        enum: ['pending','confirmed','cancelled'],
        default: 'pending'
    },
},
    {timestamps: true},);


const allBookingModel = mongoose.models.allBookingModel || mongoose.model('allBooking', allBookingSchema);

export default allBookingModel;