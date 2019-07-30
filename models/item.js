const mongoose = require('mongoose'); // require mongoose

const Schema = mongoose.Schema; //Schema Constructor



const itemSchema = new Schema({
    type: String, //console, equipment or game
    platform: String, //what platform your item is used for
    title: String, //item name
    condition: String, //new, used, damaged, for parts ect
    description: String, //description on wear
    available: Boolean,
}, { timestamps: true })

const Item = mongoose.model('Item', itemSchema);

//Exported for access in `app.js`
module.exports = Item;