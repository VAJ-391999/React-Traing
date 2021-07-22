const express = require('express');
const path = require('path');
const routeUrl  = require('./routes/routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');



const app = express();
//sequence matter
//Init middleware
//app.use(logger);

//Engin middleware
//app.engine('handlebars', exphbs({ defaultLayout : 'main'}))
//app.set('view engine', 'handlebars');

//Body parser Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false}))

//homepage
app.get('/', (req, res) => res.json({ msg : "Get success.."}));

//Get static
//app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use('/api/members', routeUrl);

const PORT = process.env.PORT || 4003;

app.listen(PORT, () => console.log(`Server is running up on port ${PORT}....`))