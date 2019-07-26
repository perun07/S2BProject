//express
const express = require('express');
const router = express.Router();

//Models
const Item = require('../models/item.js');

//Index
router.get('/', (req, res) => {
    Item.find({}, (err, allItem) => {
      res.render('index.ejs', {
        item: allItem,
      })
    })
  });