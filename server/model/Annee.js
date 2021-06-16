const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AnneeSchema = new Schema({   
    
    createAt :{
        type: Date,
        
    },
    debut :{
        type: Date,
        
    },
    fin :{
        type: Date,
         
    },
    deadline:{
        type: Date,
        
    }
})
const annee =  mongoose.model('annee', AnneeSchema);
module.exports = annee
