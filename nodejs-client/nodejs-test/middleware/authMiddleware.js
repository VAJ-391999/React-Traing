const jwt = require('jsonwebtoken');
const User = require('../models/SignUpModels');

const requireAuth = (request, res, next) => {
    let loginToken = "";
    console.log(request.headers.cookie)
    const cookieData = request.headers.cookie.split(';');

    cookieData.map((item, index) => {
        const tempData = item.split("=")
        if (tempData[0] === "login") {
            loginToken = tempData[1]
        }
    })

    if (loginToken !== "") {
        jwt.verify(loginToken, process.env.SECRET_KEY, (err, decodeedToken) => {
            if (err) {
                console.log(err.message)
            } else {
                console.log(decodeedToken)
                next()
            }
        })
    }
    else {
        res.send()
        next()
    }
}

const checkUser = (req, res, next) => {
    let loginToken = "";
    console.log(req.headers.cookie)
    const cookieData = req.headers.cookie.split(';');

    cookieData.map((item, index) => {
        const tempData = item.split("=")
        if (tempData[0] === "login") {
            loginToken = tempData[1]
        }
    })

    if (loginToken !== "") {
        jwt.verify(loginToken, process.env.SECRET_KEY, async (err, decodeedToken) => {
            if (err) {
                console.log(err.message)
               
            } else {
                console.log(decodeedToken)
                let user = await User.findById(decodeedToken._id);
                req.currentuser = user
                console.log(user)
                next()
            }
        })
    }
    else {
        
        next()
    }
}

module.exports = { requireAuth, checkUser };