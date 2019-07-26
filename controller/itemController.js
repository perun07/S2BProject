//express
const express = require('express');
const router = express.Router();

//Models
const Item = require('../models/item.js');

// Account Page
// Get method to request the information from the server
// In this case we are requesting the account page for the user
// This page has the users information and call to action to post items for sale
router.get('/', (req, res) => {
  //Item.find({}, (err, allItem)=>{
    res.render('selling/account.ejs') //, {
      //item: allItem,
    })
//   })
// })

// Item Submission Page
// This is the page the user inputs the items for sale
// when the user hits submit they are sent back to the /account page
router.get('/new', (req, res) => {
  res.render('selling/posting.ejs')
});

// Create
// This is the post route - used to submit the items for sale
router.post('/' , (req,res)=>{
Item.create(req.body, (err, createdItem)=>{
res.redirect('/account')  
  })  
})

//Delete
router.delete('/:id', (req, res) => {
  Item.findOneAndDelete({_id:req.params.id}, (err, deletedItem) => {
    res.redirect('/account')
  })
})

//Edit
router.get('/:id/edit', (req, res) => {
  Item.findById(req.params.id, (err, foundItem) => {
    res.render('edit.ejs', {
      oneItem: foundItem
    })
  })
})

//Put
router.put('/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, edited) => {
    res.redirect('/account')
  })
})

//Show
router.get('/:id', (req, res) => {
  Item.findById(req.params.id, (err, foundItem) => {
    res.render('show.ejs', {
      oneItem: foundItem
    })
  })
})



module.exports = router;