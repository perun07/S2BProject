const mongoose = require('mongoose');
const express = require("express");
const methodOverride = require('method-override');
const app = express();
app.use(methodOverride('_method'));
//Models
const ItemSeed = require('./models/item.js')
const itemController = require('./controller/itemController')
const bodyParser = require("body-parser");
//This is MiddleWare: Functions that get in the middle of a request
app.use(bodyParser.urlencoded({ extended: true }));
//configure mongoose Promise
mongoose.Promise = global.Promise
    // Global Configuration Connect
const mongoURI = 'mongodb://localhost:27017/item';
// mongoose.connect(mongoURI);

app.use("/item", itemController)
app.listen(3000, () => {
    console.log("This Application is Running");
})

mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
    console.log('the connection with mongod is established')
})
mongoose.set('useCreateIndex', true);
// Error / success
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));