require('dotenv').config({path: __dirname+'/.env'});
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {userRouter} from './routes/user.routes';
import {listRouter} from './routes/list.routes';

const app = express();

mongoose.connect(`mongodb://orclist_db:27017/Orclist`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err) => {
    if(!err){
        console.log("Successfully Established Connection with MongoDB");
    }
    else {
        console.log("Failed to Establish Connection with MongoDB with Error: ", err);
    }
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(userRouter);
app.use(listRouter);

export default app;