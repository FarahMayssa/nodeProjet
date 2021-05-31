const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EnseignantsSchema = new Schema({   
    
    name :{
        type: String,
        required:true 
    },
   
    email :{
        type: String,
        required:true,
        unique:true
    },
    phone :{
        type: Number,
        unique:true
    },
    dept :{
        type: String,
        
    },
    
})
const enseignant =  mongoose.model('enseignant', EnseignantsSchema );
module.exports = enseignant