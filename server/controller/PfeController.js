const pfe = require("../model/Pfe");
var pfes = require("../model/Pfe");


//create and save new pfe

exports.create = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty" });
    return;
  }
  //new pfe

  const pfe = new pfes({
    titre: req.body.titre,
    encadrant: req.body.encadrant,
    description: req.body.description,
    cahier: req.body.cahier,
    date_accep: req.body.date_accep,
    der_delai: req.body.der_delai,
  });

  //save pfe in database

  pfe
    .save(pfe)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.massage || "Some error.." });
    });
};







//retrieve and return all Pfes / retrieve and return a single pfe

exports.find = (req, res) => {

    pfes.find()
  .then((pfe) => {
    res.send(pfe);
  })
  .catch((err) => {
    res.status(500)
      .send({ message: err.message || "Error when retrieving pfe.." });
  });
 
};

exports.findId = (req,res)=>{
  
    const id =req.params.id;
    pfes.findById(id)
    .then(data=>{
      if(!data){
        res.status(404).send({message: "Not found pfe with id"+id })
      }
      else {
        res.send(data)
      }
    })
    .catch(err=> {
      res.status(500).send({message: "Error retrieving pfe with id" +id})
    })
 
 
}



//update new Pfe by id

exports.update = (req, res) => {
if(!req.body){
  return res
  .status(400)
  .send({ message: "Data to update can not be empty"})
}
const id = req.params.id
pfes.findByIdAndUpdate(id,req.body, {useFindAndModify:false})
.then(data =>{
  if(!data){
  res.status(404).send({ message:`Cannot update pfe with ${id}. Maybe pfe not found`})}
  else {
    res.send(data)
  }
})
.catch(err=>{
res.status(500).send({message: "Error Update information"})
});
};







//delete Pfe with  id

exports.delete = (req, res) => {
const id = req.params.id;
pfes.findByIdAndDelete(id)
.then(data=>{
  if(!data){
    res.status(404).send({message: `Cannot delete Pfe with ${id}. Maybe id is wrong`})
  }else{
    res.send({ message : "Pfe was deleted sucsseffully"})
  }
})
.catch(err=>{
  res.satus(500).send({message:"Cannot delete Pfe with id=" +id})
});


};
