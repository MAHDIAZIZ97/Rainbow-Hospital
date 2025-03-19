import doctor from '../models/doctorModel.js';

const updateDoctorFields = async () => {
    try {
        await doctor.updateMany({}, { 
            $set:{'availableDays' : ''}
        });
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

// const modifyStaffFields = async () =>{
//     try {
//         await staffModel.updateMany({}, {
//             $rename:{'staffEmail' : 'email', 'staffName' : 'name', 'staffPassword' : 'password'},
//         });
//         console.log('file updated successfully');
//     } catch (error) {
//         console.error(error);
//     }
// }


export {updateDoctorFields, updateTimeStampToDoctorFields,modifyStaffFields}
