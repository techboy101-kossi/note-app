import express from 'express';
import authControllers from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/signup', authControllers.signUp);

authRouter.post('/signin', authControllers.signIn);

export default authRouter;
