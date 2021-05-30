const express = require('express')
const route = express.Router()



const PfeController = require('../controller/PfeController')

route.get("/pfe", (req, res) => {
    res.render("admin/pfe");
  });

 //API

route.post('/api/pfes',PfeController.create)
route.get('/api/pfes',PfeController.find)
route.get('/api/pfes/:id',PfeController.findId)
route.put('/api/pfes/:id',PfeController.update)
route.delete('/api/pfes/:id',PfeController.delete)

 

  
  
  module.exports=route