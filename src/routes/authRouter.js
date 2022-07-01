import express from 'express';

import { login, cadastroUsuario } from '../controllers/authController.js';

const router = express.Router();


router.post("/sign-up", cadastroUsuario);

router.post("/login", login);

export default router;