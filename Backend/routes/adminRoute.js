import express from 'express';
import {addDoctor, addDoctorDetails, addHealthPackage, addNotice, addOtPackage, addStaff, adminLogin, allDoctors, allHealthPackages, allNotices, allOtPackages, allStaff,deleteDoctorDetails,deleteHealthPackages,deleteNotice,deleteOtPackages,findHealthPackage,findStaff,updateDoctorDetails,updateHealthPackage,updateStaff} from '../controllers/adminController.js';
import { upload,uploadPDF } from '../middlewares/multer.js';
import { authAdmin } from '../middlewares/authAdmin.js';
import { deleteBookAppointment, deleteBulkBookAppointment, deleteBulkContactUs, deleteBulkEnquiry, deleteContactUs, deleteEnquiry, getAllAppointments, getAllContactUs, getAllEnquiries } from '../controllers/userController.js';


const adminRouter = express.Router();


adminRouter.post('/add-doctor',authAdmin, upload.single('image'),addDoctor);
adminRouter.post('/add-staff',authAdmin, upload.single('image'),addStaff);
adminRouter.post('/all-staffs',authAdmin ,allStaff);
adminRouter.post('/all-doctors',authAdmin, allDoctors);
adminRouter.post('/add-health-package',authAdmin, addHealthPackage);
adminRouter.post('/add-ot-package',authAdmin, addOtPackage);
adminRouter.post('/add-notice',authAdmin, uploadPDF.single('file'), addNotice);
adminRouter.post('/all-notices', authAdmin, allNotices);
adminRouter.post('/login', adminLogin);
adminRouter.put('/update-staff/:id',authAdmin, updateStaff);
adminRouter.get('/update-staff/:id',authAdmin, findStaff);
adminRouter.get('/get-health-package/:id',authAdmin, findHealthPackage);
adminRouter.post('/update-health-package/:id',authAdmin, updateHealthPackage);
adminRouter.post('/all-health-packages', authAdmin, allHealthPackages);
adminRouter.post('/all-ot-packages', authAdmin, allOtPackages);
adminRouter.post('/delete-health-package/:id',authAdmin, deleteHealthPackages);
adminRouter.post('/delete-ot-package/:id',authAdmin, deleteOtPackages);
adminRouter.post('/delete-notice/:id',authAdmin, deleteNotice);
adminRouter.get('/all-appointments',authAdmin, getAllAppointments);
adminRouter.get('/all-enquiries',authAdmin, getAllEnquiries);
adminRouter.get('/all-contact-us',authAdmin, getAllContactUs);
adminRouter.post('/delete-appointment/:id',authAdmin, deleteBookAppointment);
adminRouter.post('/delete-enquiry/:id',authAdmin, deleteEnquiry);
adminRouter.post('/delete-contact-us/:id',authAdmin, deleteContactUs);
adminRouter.post('/delete-appointment/delete-many',authAdmin, deleteBulkBookAppointment);
adminRouter.post('/delete-enquiry/delete-many',authAdmin, deleteBulkEnquiry);
adminRouter.post('/delete-contact-us/delete-many',authAdmin, deleteBulkContactUs);
adminRouter.post('/add-doctor-detail', authAdmin, addDoctorDetails);
adminRouter.put('/update-doctor-detail',authAdmin,updateDoctorDetails);
adminRouter.delete('/delete-doctor-detail', authAdmin, deleteDoctorDetails);

export default adminRouter;