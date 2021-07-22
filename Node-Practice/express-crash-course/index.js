const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./moddleware/logger');
const routeUrl  = require('./routes/api/members');
const members = require('./public/Members');


const app = express();
//sequence matter
//Init middleware
app.use(logger);

//Engin middleware
app.engine('handlebars', exphbs({ defaultLayout : 'main'}))
app.set('view engine', 'handlebars');

//Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

//homepage
app.get('/', (req, res) => res.render('index', {
    title: "Member App",
    members
}));

//Get static
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', routeUrl);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running up on port ${PORT}....`))