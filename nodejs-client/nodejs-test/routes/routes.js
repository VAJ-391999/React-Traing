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
        response.json({ msg : "You have Sign Up Successfully" ,data})
    })
    .catch(err => {
        response.json({ msg : "Please Enter Valid Entry"})
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

router.post('/login', (request, response) => {
    const registeruser = {
        email: request.body.email,
        password: request.body.password
    }

    SignUpTemplateCopy.find({ })
    .then((data) => {
        console.log("Data :", data)
        data.forEach(function(user,index){
            if (user.email === registeruser.email) {

               if (user.password === registeruser.password) {

                   console.log("Login success..")
                   
                   request.session.user = registeruser;
                   console.log("session", request.session.user)

                   response.status(200)
                   .cookie("Name", "Payal", {
                        sameSite : "strict",
                        path: "/",
                        expires : new Date( new Date().getTime() + 100 * 1000),
                        httpOnly : true 
                   }).send({ msg : "Login Success", user})
                   
                   response.json({ msg : "Login Success", user})
                   
               }
               else {
                console.log("Login Password Fail..")
                   response.json({ msg : "Please Enter Correct Password"})
               }
            }
            else{
                console.log("Login Email Fail..")
                response.json({ msg : "Please Enter Correct Email"})
            }
        })
    })
    .catch((err) => {
        console.log("error: ", err)
    })
})


router.get('/dashboard', (request, response) => {
    console.log(request.session.user)
    if (!request.session.user) {
        response.status(401).send()
    }
    else {
        response.status(200).send("Welcome to secret API")
    }
    
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