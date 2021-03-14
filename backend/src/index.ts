import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb://orclist_db:27017/orclist', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
},
(err) => {
    if (!err) {
        console.log('Successfully Established Connection with MongoDB')
    }
    else {
        console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
    }
});

app.get('/', (req, res) => {
  res.send('Orclist Modo ON');
});

app.use(express);
app.listen(5050);