import express from "express";
import cors from "cors"
import joi from 'joi';
import { MongoClient, ObjectId } from "mongodb";
import dayjs from 'dayjs';
import dotenv from "dotenv";
import { cadastroUsuario } from "./src/controller/registerController.js";

const app = express();

app.use([cors(), express.json()]);

app.post("/sign-up", cadastroUsuario);

app.listen(5000, ()=> {
    console.log("servidor rodando");
});
