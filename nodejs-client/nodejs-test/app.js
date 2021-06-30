const express = require('express')
const fs = require('fs')
const app = express();
const mongoose = require('mongoose')
const SignUpTemplateCopy = require('./models/SignUpModels');


//get the status of environment variable
const dotenv = require('dotenv')
const routeUrls = require('./routes/routes')
const data = require('./LearnTest/UserApi/useapi.json')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database Connected"))

//use is for middleware registration
app.use('/userapi', (req,res) => {
    
    fs.readFile(`${__dirname}/LearnTest/UserApi/useapi.json`, "UTF-8", (err, data) => {
        //res.writeHead(200, { "content-type": "application/json" });
        res.send(data)
        res.end("<h1>Hello UserAPI</h1>")
    }) 
   
})
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", 'true');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
  });
app.use(express.json())
app.use(cors())
app.use('/app', routeUrls)
app.listen(4000, () => console.log('Server is up and running....'))