const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PfeSchema = new Schema({   
    
    titre :{
        type: String,
        required:true 
    },
    encadrant :{
        type: String
    },
    description :{
        type: String,
        required:true,
       
    },
    cahier:{
        type: String
    },
    date_accep :{
        type: Date,

    },
    der_delai :{
        type: Date,
        
    }
})
const pfe =  mongoose.model('pfe', PfeSchema);
module.exports = pfe
