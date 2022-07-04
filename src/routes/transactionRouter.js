import express from "express";
import {getuser, movimentacao, getMovimentacao} from "../controllers/transactionController.js"

const transactionRouter = express.Router();

transactionRouter.post("/movimentacao", movimentacao);

transactionRouter.get("/movimentacao", getMovimentacao );

transactionRouter.get("/user", getuser );

export default transactionRouter;