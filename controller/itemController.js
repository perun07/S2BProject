//express
const express = require('express');
const router = express.Router();

//Models
const Item = require('../models/item.js');

// Account Page
// Get method to request the information from the server
// In this case we are requesting the account page for the user
// This page has the users information and call to action to post items for sale
router.get('/account', (req, res) => {
  Item.find({}, (err, allItem)=>{
    res.send('this is the user account page', {
      item: allItem,
    })
  })
})

// Item Submission Page
// This is the page the user inputs the items for sale
// when the user hits submit they are sent back to the /account page
router.get('/account/sell', (req, res) => {
  res.send('This is the item selling page')
});

// Create
// This is the post route - used to submit the items for sale
router.post('/account' , (req,res)=>{
Item.create(req.body, (err, createdItem)=>{
res.redirect('/account')  
  })  
})

module.exports = router;