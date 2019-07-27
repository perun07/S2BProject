const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017'+'games';
const db = mongoose.connection;
mongoose.connect(mongoURI, {useNewUrlParser:true});
db.on('connected', ()=>{
    console.log('connected to mongodb');
})