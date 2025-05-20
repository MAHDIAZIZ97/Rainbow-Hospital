import express from 'express';
import { getAllDoctors, getAllNotices, submitBookAppointment, submitContactUs, submitEnquiry } from '../controllers/userController.js';

const userRouter = express.Router();


userRouter.get('/all-doctors', getAllDoctors )
userRouter.get('/all-notices', getAllNotices )
userRouter.post('/submit-book-appointment', submitBookAppointment)
userRouter.post('/submit-enquiry', submitEnquiry)
userRouter.post('/submit-contact-us', submitContactUs)


export default userRouter;