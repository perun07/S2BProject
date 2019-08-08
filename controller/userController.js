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
    // if (!req.session.userID){
    //     res.redirect("users/login")}
    try {
        const newUser = await User.create(req.body);
        req.session.userId = newUser._id
        req.session.user=newuser
        res.redirect("/account");
    } catch (err) {
        console.log(err);
        
        res.send(err);
    }
})

router.post("/login", async(req, res) => {
    console.log(req.body);
    try {
        const userFromDb = await User.findOne({ username:req.body.username })
        // console.log('userFromDb', userFromDb);
        if ( req.body.password!== userFromDb.password) {
            // req.session.userId === userFromDb._id;
            // res.send("checking")
            res.redirect("/users/login");
        }else {
            req.session.userId=userFromDb._id
            req.session.user=userFromDb
            console.log(req.session.user)
            res.redirect("/account")
        }
        // res.send("trying to login");
    }catch(err) {
        console.log(err);
        res.send(err)
        
    }

})
module.exports = router
// console.log('this is the user login controller');

// youtube video talking about userController - https://www.youtube.com/watch?time_continue=611&v=v66XMIzwjSM