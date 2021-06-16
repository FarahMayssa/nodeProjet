const express = require('express')
const route = express.Router()



const PfeDemController = require('../controller/PfeDemController')



 //API

route.post('/api/pfeRequest',PfeDemController.create)
route.get('/api/pfeRequest',PfeDemController.find)
route.get('/api/pfeRequest/:id',PfeDemController.findId)
route.get('/api/pfeRequet/:name',PfeDemController.findName)
route.put('/api/pfeRequest/:id',PfeDemController.update)
route.delete('/api/pfeRequest/:id',PfeDemController.delete)

 

  
  
  module.exports=route