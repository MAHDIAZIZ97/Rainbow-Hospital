import express from 'express';
import {addDoctor, addHealthPackage, addNotice, addOtPackage, addStaff, adminLogin, allDoctors, allHealthPackages, allNotices, allOtPackages, allStaff,findStaff,updateStaff} from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';
import { authAdmin } from '../middlewares/authAdmin.js';


const adminRouter = express.Router();


adminRouter.post('/add-doctor',authAdmin, upload.single('image'),addDoctor);
adminRouter.post('/add-staff',authAdmin, upload.single('image'),addStaff);
adminRouter.post('/all-staffs',authAdmin ,allStaff);
adminRouter.post('/all-doctors',authAdmin, allDoctors);
adminRouter.post('/add-health-package',authAdmin, addHealthPackage);
adminRouter.post('/add-ot-package',authAdmin, addOtPackage);
adminRouter.post('/add-notice',authAdmin, upload.single('file'), addNotice);
adminRouter.post('/all-notices', authAdmin, allNotices);
adminRouter.post('/login', adminLogin);
adminRouter.put('/update-staff/:id',authAdmin, updateStaff);
adminRouter.get('/update-staff/:id',authAdmin, findStaff);
adminRouter.post('/all-health-packages', authAdmin, allHealthPackages);
adminRouter.post('/all-ot-packages', authAdmin, allOtPackages);


export default adminRouter;