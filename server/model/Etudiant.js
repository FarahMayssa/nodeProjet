const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EtudiantSchema = new Schema({   
    
    name :{
        type: String,
                
    },
    email :{
        type: String,
        required:true,
        unique:true
    },
    CE :{
        type: String,
        unique:true
    },
    phone :{
        type: Number,
        unique:true
    },
    
    classe :{
        type: String
    },
    supervisor :{
        type: String
    }
   
  
})
const etudiant =  mongoose.model('etudiant', EtudiantSchema);
module.exports = etudiant
