const express  = require('express');
const app = express();
const tuats = require('./routes/tuat.route')
const cors = require('cors');


app.use(cors());
app.use('/tuat',tuats);
port = 3000;
app.listen(port, ()=>{
    console.log("server live on port " + port);
})
