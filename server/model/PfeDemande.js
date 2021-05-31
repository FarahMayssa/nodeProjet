const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PfeDemandeSchema = new Schema({   
    
    name :{
        type: String,
        
    },
    title :{
        type: String
    },
    supervisor :{
        type: String,
        
       
    }, description :{
        type: String,
        
       
    }
})
const pfe_demande =  mongoose.model('pfe_demande', PfeDemandeSchema);
module.exports = pfe_demande
