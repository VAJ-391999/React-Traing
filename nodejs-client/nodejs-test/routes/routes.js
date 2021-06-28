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

module.exports = router;