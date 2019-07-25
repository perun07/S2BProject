const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema ({
    title: String, 
    Condition : String,
    Quantity: Number,
    Description: String
})

const Games = mongoose.model('Games', gameSchema);

module.exports = Games;