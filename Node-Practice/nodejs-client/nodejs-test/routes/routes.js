const requests = require('requests');
const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { checkUser } = require('../middleware/authMiddleware');
const SignUpTemplateCopy = require('../models/SignUpModels');


router.post('/signup', async (request, response) => {

    try {
        const signUpedUser = new SignUpTemplateCopy({
            fullName: request.body.fullName,
            username: request.body.username,
            email: request.body.email,
            password: request.body.password,
        })

        const token = await signUpedUser.generateAuthToken();
        console.log("success token", token)

        const signup = await signUpedUser.save()
        response.json({ msg: "You have Sign Up Successfully", signup })
        /*response.status(200)
                   .cookie("signup", "signupjwt", {
                        sameSite : "strict",
                        path: "/",
                        httpOnly : true 
                   }).send({ msg: "Signup Success", signup })*/

    }
    catch (err) {
        response.json({ msg: err.message })
    }
})

router.get('/login', (request, response) => {

    const uemail = request.body.email
    const upassword = request.body.password

    console.log(uemail, upassword)


    SignUpTemplateCopy.find({})
        .then((data) => {
            console.log("Data :", data)
            response.json(data)
        })
        .catch((err) => {
            console.log("error: ", err)
        })

})

router.post('/login', async (request, response) => {

    try {
        const registeruser = {
            email: request.body.email,
            password: request.body.password
        }

        console.log(`before login time get cookie ${request.headers.cookie.login}`)

        const useremail = await SignUpTemplateCopy.findOne({ email: registeruser.email })

        if (useremail) {
            const isMatch = await bcrypt.compare(registeruser.password, useremail.password)

            if (isMatch) {

                const token = jwt.sign({_id:useremail._id, "iat": 1234567890}, process.env.SECRET_KEY)
                console.log("login token generater",token)

                response.status(200)
                   .cookie("login", token, {
                        httpOnly : true 
                   }).send({ msg: "Login Success", useremail, auth: true })

            }
            else {
                response.json({ msg: "Please Enter Correct Password", auth: false  })
            }
        }
        else {
            response.json({ msg: "Please Enter Correct Email", auth: false  })
        }
    }
    catch (err) {
        response.json({ msg: "Please Enter Valid Login Details" , auth: false })
    }
})


router.get('/dashboard', checkUser, (request, response) => {
    console.log(`Dashboard time get cookie ${request.headers.cookie}`)
    let loginToken = "";
    
    const cookieData = request.headers.cookie.split(';');
    cookieData.map((item,index) => {
        const tempData = item.split("=")
        if (tempData[0] === "login") {
            loginToken = tempData[1]
        }
    })
    console.log("login Token" , loginToken)
    console.log("middleware", request.currentuser)
    if(request.headers.cookie) {
        response.json({msg: "dashboard"})
    }
    else {
        response.json({msg: "cookie not set"})
    }
})

router.get('/logout', async (request, response) => {
    try{
        response.status(200)
        .cookie("login","logut", {maxAge: 1, httpOnly : true })
        .json({msg:"logout"})
    }catch(err) {
        response.status(400).json({msg:"Somthing Wrong"})
    }

})

router.post('/', (request, response) => {
    
    console.log(request.body.cName);
    requests(`http://api.openweathermap.org/data/2.5/weather?q=${request.body.cName}&appid=5ae591762ca1938ecc9cddeafe00f8d4`)
        .on('data', function (chunk) {
            response.setHeader("Access-Control-Allow-Origin", "*")
            response.write(chunk)
            response.end(`Post Mothos Success Congo... ${request.body}`)
        })

})

module.exports = router;