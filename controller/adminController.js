//express
const express = require('express');
const router = express.Router();
//Models
const Item = require('../models/item');
// items are the keys within the Item object
// Account Page
// Get method to request the information from the server
// In this case we are requesting the account page for the user
// This page has the users information and call to action to post items for sale
// dont need the /account because we are using a controller

router.get('/', async(req, res) => {
    if (!req.session.userId) {
        res.render("users/register.ejs")
    } else {
        // if something goes wrong we have the try function

        try {
            // array of items that are for sale by user
            // items is the array of the submitted information
            const items = await Item.find({ price: null });
            //Item.find({}, (err, allItem)=>{
            res.render('admin/adminPage.ejs', {
                items: items
            })
        } catch (err) {
            res.send(err);
        }
    }
})


// Create
// This is the post route - used to submit the items for sale
router.post('/:id', async(req, res) => {
    console.log('reqvody', req.body);
    try {
        const newItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log(newItem);
        res.redirect('/admin');
    } catch (err) {
        res.send(err);
    }
})




module.exports = router;