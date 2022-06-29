import express from "express";
import cors from "cors"
import joi from 'joi';
import { MongoClient, ObjectId } from "mongodb";
import dayjs from 'dayjs';
import dotenv from "dotenv";

const app = express();

app.use([cors(), express.json()]);

app.listen(5000, ()=> {
    console.log("servidor rodando");
});
