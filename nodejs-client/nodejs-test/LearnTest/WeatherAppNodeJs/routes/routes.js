
const express = require('express')
const router = express.Router();
const requests = require('requests');

router.get('/getdata', (req, res) => {
    requests('http://api.openweathermap.org/data/2.5/weather?q=pune&appid=5ae591762ca1938ecc9cddeafe00f8d4')
        .on('data', function (chunk) {
            res.setHeader("Access-Control-Allow-Origin", "*")
            res.write(chunk)
            res.end()
        })
})

router.post('/postdata', (request, response) => {
    console.log(`login time get cookie ${request.cookies.login}`)
    console.log(request.body.cName)
    requests(`http://api.openweathermap.org/data/2.5/weather?q=${request.body.cName}&appid=5ae591762ca1938ecc9cddeafe00f8d4`)
    .on('data', function (chunk) {
        response.setHeader("Access-Control-Allow-Origin", "*")
        response.write(chunk)
        response.end()
    })
})

module.exports = router;