import express from 'express';
import { getAllDoctors } from '../controllers/userController.js';

const userRouter = express.Router();


userRouter.get('/all-doctors', getAllDoctors )

export default userRouter;