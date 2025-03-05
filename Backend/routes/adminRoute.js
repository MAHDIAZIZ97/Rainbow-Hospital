import express from 'express';
import {addDoctor, addHealthPackage, addOtPackage, addStaff, adminLogin, allDoctors, allStaff} from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';
import { authAdmin } from '../middlewares/authAdmin.js';


const adminRouter = express.Router();

adminRouter.post('/add-doctor',authAdmin, upload.single('image'),addDoctor);
adminRouter.post('/add-staff',authAdmin, upload.single('staffImage'),addStaff);
adminRouter.post('/all-staffs',authAdmin ,allStaff);
adminRouter.post('/all-doctors',authAdmin, allDoctors);
adminRouter.post('/add-health-package',authAdmin, addHealthPackage);
adminRouter.post('/add-ot-package',authAdmin, addOtPackage);
adminRouter.post('/login', adminLogin);
// adminRouter.put('/update-staff/:id',authAdmin, updateStaff);

export default adminRouter;