const etudiant = require("../model/Etudiant");
var etudiants = require("../model/Etudiant");


//create and save new Etudiant

exports.create = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty" });
    return;
  }
  //new user

  const etudiant = new etudiants({
    name: req.body.name,
    email: req.body.email,
    CE: req.body.CE,
    phone: req.body.phone,
    classe: req.body.classe,
    supervisor: req.body.supervisor
  });

  //save etudiant in database

  etudiant
    .save(etudiant)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.massage || "Some error.." });
    });
};







//retrieve and return all Etudiants / retrieve and return a single Etudiant

exports.find = (req, res) => {

  etudiants.find()
  .then((etudiant) => {
    res.send(etudiant);
  })
  .catch((err) => {
    res.status(500)
      .send({ message: err.message || "Error when retrieving etudiant.." });
  });
 
};

exports.findId = (req,res)=>{
  
    const id =req.params.id;
    etudiants.findById(id)
    .then(data=>{
      if(!data){
        res.status(404).send({message: "Not found student with id"+id })
      }
      else {
        res.send(data)
      }
    })
    .catch(err=> {
      res.status(500).send({message: "Error retrieving student with id" +id})
    })
 
 
}



//update new Etudiant by Etu_id

exports.update = (req, res) => {
if(!req.body){
  return res
  .status(400)
  .send({ message: "Data to update can not be empty"})
}
const id = req.params.id
etudiants.findByIdAndUpdate(id,req.body, {useFindAndModify:false})
.then(data =>{
  if(!data){
  res.status(404).send({ message:`Cannot update etudiant with ${id}. Maybe etudiant not found`})}
  else {
    res.send(data)
  }
})
.catch(err=>{
res.status(500).send({message: "Error Update information"})
});
};







//delete Etudiant with Etu_id

exports.delete = (req, res) => {
const id = req.params.id;
etudiants.findByIdAndDelete(id)
.then(data=>{
  if(!data){
    res.status(404).send({message: `Cannot delete etudiant with ${id}. Maybe id is wrong`})
  }else{
    res.send({ message : "Etudiant was deleted sucsseffully"})
  }
})
.catch(err=>{
  res.satus(500).send({message:"Cannot delete Etudiant with id=" +id})
});


};
