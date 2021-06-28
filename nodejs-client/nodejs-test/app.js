const express = require('express')
const app = express();
const mongoose = require('mongoose')
const SignUpTemplateCopy = require('./models/SignUpModels');

//get the status of environment variable
const dotenv = require('dotenv')
const routeUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database Connected"))

//use is for middleware registration
app.use(express.json())
app.use(cors())
app.use('/app', routeUrls)
app.listen(4000, () => console.log('Server is up and running....'))