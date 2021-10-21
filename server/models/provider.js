const mongoose = require('mongoose');

const { Schema } = mongoose

const Provider = new Schema({
    name:{
        type: String,
        required: [true, 'Este campo es requerido']
     },
     address:{
        type: String,
        required: [true, 'Este campo es requerido']
     },
     phone:{
        type: String,
        required: [true, 'Este campo es requerido']
     },
})
module.exports =  mongoose.model('Provider', Provider)