import express from "express";
import cors from "cors"
import router from './routes/authRouter.js';

const app = express();

app.use([cors(), express.json(), router]);


app.listen(5000, ()=> {
    console.log("servidor rodando");
});
