const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EnseignantsSchema = new Schema({   
    
    name :{
        type: String,
        required:true 
    },
    phone :{
        type: Number
    },
    email :{
        type: String,
        required:true,
        unique:true
    }
})
const enseignant =  mongoose.model('enseignant', EnseignantsSchema );
module.exports = enseignant