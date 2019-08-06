console.log("this is the server.js file");

//.env
require('dotenv').config()

//Dependencies
const express = require('express');
const app = express();
//parse
app.use(express.urlencoded({ extended: true }))



//connecting
const connectionString = process.env.MONGODB_URI;

//Mongoose
const mongoose = require('mongoose');

//Secret
const session = require('express-session')

//Method Override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//controllers
const userController = require('./controller/userController');
const itemController = require('./controller/itemController');
const adminController = require('./controller/adminController');

// this is the route that gets us to the account page
app.use('/account', itemController);


// css file
app.use('/public', express.static('public'));
app.use('/users', userController);
app.use('/admin', adminController);

//setting port and mongo
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI



// const uri = "mongodb://perun07:UpqIbVgOkl0cajHm@cluster0-shard-00-00-qjm1o.mongodb.net:27017,cluster0-shard-00-01-qjm1o.mongodb.net:27017,cluster0-shard-00-02-qjm1o.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

// secret is stored in .env
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  }))

// mongoose.connect(uri, { useNewUrlParser: true });
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
mongoose.connection.once ('open', () => {
  console.log('connected to mongo')
})

//linking other pages//
app.set('view engine', 'ejs');
app.set('views');
app.use('/homepage', express.static('homepage'));


app.listen(PORT, () => {
  console.log('listening on port', PORT);
});

