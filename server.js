console.log("this is the server.js file");

//Dependencies
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }))

//.env
require('dotenv').config()

//connecting
// const connectionString = process.env.MONGODB_URI;

//Mongoose
const mongoose = require('mongoose');

//Method Override
const session = require('express-session')
app.use(session({
    secret: "beepboopbeepbeepboop",
    resave: false,
    saveUninitialized: false
}))
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
const userController = require('./controller/userController');
const itemController = require('./controller/itemController');
const adminController = require('./controller/adminController');
// this is the route that gets us to the account page
app.use('/account', itemController);


// css file
app.use('/public', express.static('public'));
app.use('/users', userController);
app.use('/admin', adminController);
const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});

// const uri = "mongodb://perun07:UpqIbVgOkl0cajHm@cluster0-shard-00-00-qjm1o.mongodb.net:27017,cluster0-shard-00-01-qjm1o.mongodb.net:27017,cluster0-shard-00-02-qjm1o.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

// secret is stored in .env
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  }))

// mongoose.connect(uri, { useNewUrlParser: true });
mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})

//linking other pages//
app.set('view engine', 'ejs');
app.set('views');
app.use('/homepage', express.static('homepage'));

// Promise.reject(new Error('woops'))
//mongodb


// var MongoClient = require('mongodb').MongoClient;


// MongoClient.connect(uri, function(err, client) {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
