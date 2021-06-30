//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//api key : 5ae591762ca1938ecc9cddeafe00f8d4(default)
//api.openweathermap.org/data/2.5/weather?q=pune&appid=5ae591762ca1938ecc9cddeafe00f8d4

const requests = require('requests');
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser');
const dotenv = require('dotenv')

const routURL = require('./routes');

const app = express();
dotenv.config()
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    requests('http://api.openweathermap.org/data/2.5/weather?q=pune&appid=5ae591762ca1938ecc9cddeafe00f8d4')
        .on('data', function (chunk) {
            res.setHeader("Access-Control-Allow-Origin", "*")
            //res.writeHead(200,"Access-Control-Allow-Origin", "*")
            res.write(chunk)
            res.end()
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
app.use(cors)
app.use('app/', routURL)
app.listen(4002, () => console.log('Server is up and running....'))



/*const server = http.createServer((req, res) => {
    app.post("/", (request, response) => {
        let cityName = request.body.cityName
        console.log("Get city name", cityName)
    })
    
    if (req.url == "/") {
        requests('http://api.openweathermap.org/data/2.5/weather?q=pune&appid=5ae591762ca1938ecc9cddeafe00f8d4')
        .on('data', function (chunk) {
            res.setHeader("Access-Control-Allow-Origin", "*")
            //res.writeHead(200,"Access-Control-Allow-Origin", "*")
            res.write(chunk)
            res.end()
        })
        .on('end', function (err) {
            if (err) return console.log('connect closed due to errors')
            console.log('end')
        });

        
    }
});


server.listen(4002, () => console.log('Server is up and running....'));*/