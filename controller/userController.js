const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get("/register", (req, res) => {
    res.render("users/register.ejs");
})

router.get("/login", (req, res) => {
    res.render("users/login.ejs");
})

router.post("/", async(req, res) => {
    try {
        const newUser = await User.create(req.body);
        req.session.userId = newUser._id
        res.redirect("/account");
    } catch (err) {
        res.send(err);
    }
})

router.post("/login", async(req, res) => {
    console.log(req.body);
    try {
        const userFromDb = await User.findOne({ username: req.body.username })
        console.log('userFromDb', userFromDb);
        if (userFromDb.password === req.body.password) {
            req.session.userId = userFromDb._id;
            res.redirect("/account");
        }
        // res.send("trying to login");
    } catch (err) {
        res.redirect("/users/register");
    }

})
module.exports = router
console.log('this is the user login controller');

// youtube video talking about userController - https://www.youtube.com/watch?time_continue=611&v=v66XMIzwjSM