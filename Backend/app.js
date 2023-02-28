const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const sequelize = require('./db');

const app = express();
app.use(cors({origin:'*'}));
app.use(bodyParser.json());
app.use('/',routes)



const port = 5000;
app.listen(port,(err)=>{
    if(err) throw err;
    else console.log("Server listening on port " + port);
})