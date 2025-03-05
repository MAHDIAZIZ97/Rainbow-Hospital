import mongoose from 'mongoose';


const staffSchema = new mongoose.Schema({
    staffName: {
        type: String,
        required: true
    },
    staffEmail: {
        type: String,
        required: true,
        default: '',
        unique: true
    },
    staffId: {
        type: String,
        required: true,
        unique: true
    },
    staffImage: {
        type: String,
        required: true
    },
    staffPassword: {
        type: String,
        required: true
    },
});


const staffModel = mongoose.models.staffModel || mongoose.model('staffs', staffSchema);

export default staffModel;