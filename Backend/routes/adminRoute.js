import express from 'express';
import {addDoctor, addStaff, adminLogin} from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';
import { authAdmin } from '../middlewares/authAdmin.js';


const adminRouter = express.Router();

adminRouter.post('/add-doctor',authAdmin, upload.single('image'),addDoctor);
adminRouter.post('/add-staff',authAdmin, upload.single('image'),addStaff);
adminRouter.post('/login', adminLogin);

export default adminRouter;