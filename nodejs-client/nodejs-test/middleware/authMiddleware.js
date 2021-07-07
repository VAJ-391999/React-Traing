const jwt = require('jsonwebtoken');

const requireAuth = (request, res, next) => {
    let loginToken ="";
    console.log(request.headers.cookie)
    const cookieData = request.headers.cookie.split(';');
    
    cookieData.map((item,index) => {
        const tempData = item.split("=")
        if (tempData[0] === "login") {
            loginToken = tempData[1]
        }
    })

    if(loginToken !== "") {
        jwt.verify(loginToken, process.env.SECRET_KEY, (err, decodeedToken) => {
            if(err) {
                console.log(err.message)
            }else{
                console.log(decodeedToken)
                next()
            }
        })
    }
    else {
        res.send()
    }
}

module.exports = { requireAuth };