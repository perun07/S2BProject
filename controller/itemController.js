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
            const items = await Item.find();
            //Item.find({}, (err, allItem)=>{
            res.render('selling/account.ejs', {
                items: items
            })
        } catch (err) {
            res.send(err);
        }
    }
})

// Item Submission Page
// This is the page the user inputs the items for sale
// when the user hits submit they are sent back to the /account page
router.get('/new', (req, res) => {
    res.render('selling/posting.ejs');
})

//Show
router.get('/:id', async(req, res) => {
    const item = await Item.findById(req.params.id);
    res.render('selling/show.ejs', {
        item: item
    })
})

// Create
// This is the post route - used to submit the items for sale
router.post('/', async(req, res) => {
    try {
        const newItem = await Item.create(req.body);
        console.log(newItem);
        res.redirect('/account');
    } catch (err) {
        res.send(err);
    }
})

//Delete
router.delete('/:id', async(req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.redirect('/account');
    } catch (err) {
        res.send(err);
    }
})

//Edit
router.get('/:id/edit', async(req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        res.render('account/edit.ejs', {
            item: item
        })
    } catch (err) {
        res.send(err);
    }
})

//Put
router.put('/:id', async(req, res) => {
    try {
        const newItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log(newItem);
        res.redirect('/account/${req.params.id}')
    } catch (err) {
        res.send(err);
    }
})


module.exports = router;