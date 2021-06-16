const enseignant = require("../model/Enseignant");
var enseignants = require("../model/Enseignant");





//create and save new Prof

exports.create = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty" });
    return;
  }
  //new Prof

  const enseignant = new enseignants({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    dept: req.body.dept,
    
    
  });

  //save Prof in database

  enseignant
    .save(enseignant)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Some error.." });
    });
};







//retrieve and return all Profs / retrieve and return a single Prof

exports.find = (req, res) => {

enseignants.find()
  .then((enseignant) => {
    res.send(enseignant);
  })
  .catch((err) => {
    res.status(500)
      .send({ message: err.massage || "Error when retrieving Prof.." });
  });
 
};

exports.findId = (req,res)=>{
  
    const id =req.params.id;
    enseignants.findById(id)
    .then(data=>{
      if(!data){
        res.status(404).send({message: "Not found Prof with id"+id })
      }
      else {
        res.send(data)
      }
    })
    .catch(err=> {
      res.status(500).send({message: "Error retrieving Prof with id" +id})
    })
 
 
}
exports.findName = (req, res) => {
  const name =req.params.name;
  enseignants.find({name:name})
.then((enseignant) => {
  res.send(enseignant);
})
.catch((err) => {
  res.status(500)
    .send({ message: err.message || "Error when retrieving enseignant.." });
});

};



//update new Prof by Etu_id

exports.update = (req, res) => {
if(!req.body){
  return res
  .status(400)
  .send({ message: "Data to update can not be empty"})
}
const id = req.params.id
enseignants.findByIdAndUpdate(id,req.body, {useFindAndModify:false})
.then(data =>{
  if(!data){
  res.status(404).send({ message:`Cannot update Prof with ${id}. Maybe Prof not found`})}
  else {
    res.send(data)
  }
})
.catch(err=>{
res.status(500).send({message: "Error Update information"})
});
};







//delete Prof with id

exports.delete = (req, res) => {
const id = req.params.id;
enseignants.findByIdAndDelete(id)
.then(data=>{
  if(!data){
    res.status(404).send({message: `Cannot delete Prof with ${id}. Maybe id is wrong`})
  }else{
    res.send({ message : "Prof was deleted sucsseffully"})
  }
})
.catch(err=>{
  res.satus(500).send({message:"Cannot delete Prof with id=" +id})
});


};
