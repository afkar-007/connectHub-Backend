const express = require("express")

const Router = express.Router()

const {register,Login,Profile} = require("../controller/User")

Router.post('/register',register);
Router.post('/Login',Login);
Router.get('/profile/:id',Profile)


module.exports=Router