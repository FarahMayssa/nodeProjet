const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AnneeSchema = new Schema({   
    
    createAt :{
        type: Date,
        required:true 
    }
})
const annee =  mongoose.model('annee', AnneeSchema);
module.exports = annee
