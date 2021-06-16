const annee = require("../model/Annee");
var annees = require("../model/Annee");





//create and save new year

exports.create = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty" });
    return;
  }
  //new year

  const annee = new annees({
    createAt: req.body.createAt,
    debut: req.body.debut,
    fin:req.body.fin,
    deadline: req.body.deadline
  
    
  });

  //save year in database

  annee
    .save(annee)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Some error.." });
    });
};







//retrieve and return all years / retrieve and return a single year

exports.find = (req, res) => {

    annees.find()
  .then((annee) => {
    res.send(annee);
  })
  .catch((err) => {
    res.status(500)
      .send({ message: err.massage || "Error when retrieving year.." });
  });
 
};

exports.findId = (req,res)=>{
  
    const id =req.params.id;
    annees.findById(id)
    .then(data=>{
      if(!data){
        res.status(404).send({message: "Not found year with id"+id })
      }
      else {
        res.send(data)
      }
    })
    .catch(err=> {
      res.status(500).send({message: "Error retrieving student with id" +id})
    })
 
 
}



//update new year by id

exports.update = (req, res) => {
if(!req.body){
  return res
  .status(400)
  .send({ message: "Data to update can not be empty"})
}
const id = req.params.id
annees.findByIdAndUpdate(id,req.body, {useFindAndModify:false})
.then(data =>{
  if(!data){
  res.status(404).send({ message:`Cannot update year with ${id}. Maybe year not found`})}
  else {
    res.send(data)
  }
})
.catch(err=>{
res.status(500).send({message: "Error Update information"})
});
};







//delete yea rwith id

exports.delete = (req, res) => {
const id = req.params.id;
annees.findByIdAndDelete(id)
.then(data=>{
  if(!data){
    res.status(404).send({message: `Cannot delete year with ${id}. Maybe id is wrong`})
  }else{
    res.send({ message : "year was deleted sucsseffully"})
  }
})
.catch(err=>{
  res.satus(500).send({message:"Cannot delete year with id=" +id})
});


};
