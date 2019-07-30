const express = require("express");
const router = express.Router();
const Item = require('../models/item');

//INDEX ROUTES
router.get("/", (req, res) => {
    Item.find({}, (error, items) => {
        res.render('index.ejs', {
            itemsOnPage: items
        });
    })
})

//NEW ROUTE
router.get("/new", (req, res) => {
    res.render("new.ejs")
})


//CREATE ROUTE
router.post('/', (req, res) => {
    Item.create(req.body, (error, createItem) => {
        res.redirect('/items');
    })
})

//SHOW ROUTE
router.get("/:id", (req, res) => {
    Item.findById(req.params.id, (error, foundItem) => {
        res.render('show.ejs', {
            oneItem: foundItem
        });
    })
});

//DELETE
router.delete("/:id", (req, res) => {
    Item.findOneAndDelete({ _id: req.params.id }, (err, deletedItem) => {
        res.redirect('/items');
    })
})

//EDIT ROUTE
router.get("/:id/edit", (req, res) => {
        Item.findById(req.params.id, (err, foundItem) => {
            res.render('edit.ejs', {
                oneItem: foundItem
            })
        })
    })
    //PUT ROUTE
router.put("/:id", (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, foundItem) => {
        res.redirect('/items');
    })
})
module.exports = router;