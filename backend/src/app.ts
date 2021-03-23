import express, {Request, Response} from 'express';
import cors from 'cors';
import {router} from './routes/task.routes';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(router);

export default app;