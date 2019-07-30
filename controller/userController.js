const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get("/new", (req, res) => {
    res.render("users/new.ejs");
})

router.get("/login", (req, res) => {
    res.render("user/login.ejs");
})

router.post("/", async(req, res) => {
    try {
        const newUser = await User.create(req.body);
        console.log(newUser);
        res.send(newUser);
    } catch (err) {
        res.send(err);
    }
})

router.post("/login", async(req, res) => {
    console.log(req.body);
    res.send("trying to login");
})

console.log('this is the user login controller');

// youtube video talking about userController - https://www.youtube.com/watch?time_continue=611&v=v66XMIzwjSM