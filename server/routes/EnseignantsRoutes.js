const express = require('express')
const route = express.Router()




const EnseignantController = require('../controller/EnseignantController')

route.get("/prof", (req, res) => {
    res.render("users/prof");
  });

  route.get("/adminProf", (req, res) => {
    res.render("admin/adminProf");
  });
  route.get("/addProf", (req, res) => {
    res.render("admin/addProf");
  });
  
  route.get("/edit_prof", (req, res) => {
    res.render("admin/editProfileProf");
  });
  
  route.get("/profil_prof", (req, res) => {
    res.render("admin/profilProf");
  });


  //API

route.post('/api/enseignants',EnseignantController.create)
route.get('/api/enseignants',EnseignantController.find)
route.get('/api/enseignants/:id',EnseignantController.findId)
route.put('/api/enseignants/:id',EnseignantController.update)
route.delete('/api/enseignants/:id',EnseignantController.delete)

module.exports=route