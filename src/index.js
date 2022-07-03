import express from 'express';
import router from './routes/indexRouter.js';
import cors from 'cors';

const app = express();

app.use(router);
app.use(express.json());
app.use(cors());

app.listen(5000, ()=> {
    console.log("servidor rodando");
});
