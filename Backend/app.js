const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db');
const routes = require('./routes');


const app = express();
app.use(cors({origin:'*'}));
app.use(bodyParser.json());
app.use('/',routes)



const port = 3000;
app.listen(port,(err)=>{
    if(err) throw err;
    else console.log("Server listening on port " + port);
})