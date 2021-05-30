const express = require('express')
const route = express.Router()



const EtudiantController = require('../controller/EtudiantController')


route.get("/etudiant", (req, res) => {
  
  res.render("users/etudiant");
 
  });

  route.get("/edit_etudiant", (req, res) => {
    res.render("admin/editProfileEtudiant");
  });
  
  route.get("/addEtu", (req, res) => {
    res.render("admin/addEtudiant");
  });
  route.get("/profil_etudiant", (req, res) => {
    res.render("admin/profilEtudiant");
  });
  
  route.get("/adminEtudiant", (req, res) => {
    res.render("admin/adminEtudiant");
  });



//API

route.post('/api/etudiants',EtudiantController.create)
route.get('/api/etudiants',EtudiantController.find)
route.get('/api/etudiants/:id',EtudiantController.findId)
route.put('/api/etudiants/:id',EtudiantController.update)
route.delete('/api/etudiants/:id',EtudiantController.delete)


module.exports=route