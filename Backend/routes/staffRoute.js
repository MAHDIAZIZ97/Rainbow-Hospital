import express from 'express';

import { loginStaff } from '../controllers/staffController.js';

const staffRouter = express.Router();

staffRouter.post('/login', loginStaff);

export default staffRouter;