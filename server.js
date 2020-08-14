const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const router = require('./routes/router');
const connectDB = require('./config/db');
dotenv.config({path: './config/config.env'});

const app = express();

connectDB();

app.use(express.json());

if(process.env.NODE_ENV==='development'){
  app.use(morgan('dev'));
}

app.use('/myResume/v1', router);

if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'));

  app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
