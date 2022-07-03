import express from "express";
import {movimentacao} from "../controllers/transactionController.js"

const transactionRouter = express.Router();

transactionRouter.post("/movimentacao", movimentacao);

// transactionRouter.get("/user", getuser );

export default transactionRouter;