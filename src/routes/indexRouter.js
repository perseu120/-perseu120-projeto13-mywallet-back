import express from 'express';
import cors from 'cors';
import authRouter from './authRouter.js';
import transactionRouter from "./transactionRouter.js";

const router = express.Router();
router.use(express.json());
router.use(cors());
router.use(authRouter);
router.use(transactionRouter);

export default router;