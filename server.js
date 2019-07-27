console.log("this is the server.js file");

//Dependencies
const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}))

//Mongoose
const mongoose = require('mongoose');

//Method Override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const itemController = require('./controller/itemController');
// this is the route that gets us to the account page
app.use('/account', itemController);

const PORT = 3000;
const MONGODB_URI = 'mongodb://localhost/' + 'items';

app.listen(PORT, () => {
    console.log('listening on port', PORT);
  });
  
  mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
  mongoose.connection.once('open', () => {
    console.log('connected to mongo');
  })
  