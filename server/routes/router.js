const express = require('express')
const route = express.Router()



  // auth routes
route.get("/login", (req, res) => {
    res.render("auth/login");
  });
  




  module.exports=route
  