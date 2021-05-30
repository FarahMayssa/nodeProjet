const express = require('express')
const route = express.Router()




const AnneeController = require('../controller/AnneeController')



 route.get("/annee", (req, res) => {
    res.render("admin/anneeUniversitaire");
  });


      //API

route.post('/api/annees',AnneeController.create)
route.get('/api/annees',AnneeController.find)
route.get('/api/annees/:id',AnneeController.findId)
route.put('/api/annees/:id',AnneeController.update)
route.delete('/api/annees/:id',AnneeController.delete)

  module.exports=route
  