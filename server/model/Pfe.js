const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PfeSchema = new Schema({   
    
    titre :{
        type: String,
        required:true 
    },
    etudiant :{
        type: String,
        
       
    },
    encadrant :{
        type: String
    },
   
    date_accep :{
        type: String,

    },
    cahier:{
        type: String
    },
 
  
})
const pfe =  mongoose.model('pfe', PfeSchema);
module.exports = pfe
