const pfe_demande = require("../model/PfeDemande");
var pfes_demande = require("../model/PfeDemande");


//create and save new pfe

exports.create = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty" });
    return;
  }
  //new pfe

  const pfe_demande = new pfes_demande({
    name: req.body.name,
    title: req.body.title,
    supervisor: req.body.supervisor,
    description: req.body.description
    
   
  });

  //save pfe in database

  pfe_demande
    .save(pfe_demande)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.massage || "Some error.." });
    });
};







//retrieve and return all Pfes / retrieve and return a single pfe

exports.find = (req, res) => {

    pfes_demande.find()
  .then((pfe_demande) => {
    res.send(pfe_demande);
  })
  .catch((err) => {
    res.status(500)
      .send({ message: err.message || "Error when retrieving pfe_demande.." });
  });
 
};

exports.findId = (req,res)=>{
  
    const id =req.params.id;
    pfes_demande.findById(id)
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
pfes_demande.findByIdAndUpdate(id,req.body, {useFindAndModify:false})
.then(data =>{
  if(!data){
  res.status(404).send({ message:`Cannot update pfe requested  with ${id}. Maybe pfe not found`})}
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
pfes_demande.findByIdAndDelete(id)
.then(data=>{
  if(!data){
    res.status(404).send({message: `Cannot delete Pfe with ${id}. Maybe id is wrong`})
  }else{
    res.send({ message : "Pfe was deleted sucsseffully"})
  }
})
.catch(err=>{
  res.satus(500).send({message:"Cannot delete pfe_demande with id=" +id})
});


};
