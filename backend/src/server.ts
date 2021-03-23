import app from './app';
require('dotenv').config({path: __dirname+'/.env'});

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))