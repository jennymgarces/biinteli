const mongoose = require('mongoose');

const { Schema } = mongoose

const Product = new Schema({
    name:{
        type: String,
        required: [true, 'Este campo es requerido']
     },
     color:{
         type: String,
         required: [true, 'Este campo es requerido']
     },
     size:{
         type: String,
         required: [true, 'Este campo es requerido']
     },
     price:{
         type: Number,
         required: [true, 'Este campo es requerido']
     },
     provider:{
        type: String,
         //type: Schema.Types.ObjectId,
         //ref: 'Provider',
         required: [true, 'Este campo es requerido']
     }
})
module.exports =  mongoose.model('Product', Product)