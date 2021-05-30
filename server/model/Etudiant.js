const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EtudiantSchema = new Schema({   
    
    name :{
        type: String,
        required:true 
    },
    phone :{
        type: String
    },
    email :{
        type: String,
        required:true,
        unique:true
    },
  
    classe :{
        type: String
    }
})
const etudiant =  mongoose.model('etudiant', EtudiantSchema);
module.exports = etudiant
