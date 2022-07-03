import express from 'express';
import { login, cadastroUsuario } from '../controllers/authController.js';

const authRouter = express.Router();


authRouter.post("/sign-up", cadastroUsuario);

authRouter.post("/login", login);

export default authRouter;