import doctor from '../models/doctorModel.js';

const updateDoctorFields = async () => {
    try {
        await doctor.updateMany({}, { 
            $set:{'availableDays' : ''}
        });
        // console.log('field updated successfully')
        // const doc = doctor.find();
        // console.log(doc);
    } catch (error) {
        console.log(error);
    }
};

updateDoctorFields();

const updateTimeStampToDoctorFields = async () => {
    try {
        await doctor.updateMany({}, {
            $set:{'createdAt' : new Date(),'updatedAt' : new Date()}
        });
    } catch (error) {
        console.log(error);
    }
};

updateTimeStampToDoctorFields();

export {updateDoctorFields, updateTimeStampToDoctorFields}
