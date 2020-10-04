const express =  require('express');
const cors = require('cors');
const loginRoutes = require('./routes/login.route')
app = express();

const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,POST,DELETE"
  };

app.use(cors(corsOptions));

app.use('/login',loginRoutes)

app.listen(5000,(req,res)=>{
    console.log("server is runing on port" + 5000)
})


//mongoose setup
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
let dev_db_url = 'mongodb://127.0.0.1:27017/config';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));