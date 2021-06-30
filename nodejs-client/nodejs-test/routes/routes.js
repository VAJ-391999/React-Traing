const requests = require('requests');
const express = require('express')
const router = express.Router();
const SignUpTemplateCopy = require('../models/SignUpModels');

router.post('/signup', (request,response) => {
    const signUpedUser = new SignUpTemplateCopy({
        fullName: request.body.fullName,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
    })
    signUpedUser.save()
    .then(data => {
        response.json(data)
        .catch(error => {
            response.json(error)
        })
    })
})

router.get('/login', (request, response) => {

    const uemail = request.body.email
    const upassword = request.body.password

    console.log(uemail,upassword)
    

    SignUpTemplateCopy.find({ })
    .then((data) => {
        console.log("Data :", data)
        response.json(data)
    })
    .catch((err) => {
        console.log("error: ", err)
    })
    
})

router.post('/', (request, response) => {
    console.log(request.body.cName);
    requests(`http://api.openweathermap.org/data/2.5/weather?q=${request.body.cName}&appid=5ae591762ca1938ecc9cddeafe00f8d4`)
    .on('data', function (chunk) {
        response.setHeader("Access-Control-Allow-Origin", "*")
        //res.writeHead(200,"Access-Control-Allow-Origin", "*")
        response.write(chunk)
        response.end(`Post Mothos Success Congo... ${request.body}`)
    })
   
})

module.exports = router;