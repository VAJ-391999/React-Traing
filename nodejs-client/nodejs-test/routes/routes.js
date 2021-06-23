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

module.exports = router;