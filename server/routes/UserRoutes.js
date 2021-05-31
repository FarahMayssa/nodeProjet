const express = require('express')
const route = express.Router()




const UserController = require('../controller/UserController')




      //API

route.post('/user/signup',UserController.signup)
route.post('/user/login',UserController.login)


module.exports=route
  