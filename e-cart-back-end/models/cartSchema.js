const mongoose = require('mongoose')

//defining schema for wishlist collection to store data
const cartSchema= new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
        

    },
    price:{
        type:Number,
        required:true

    },
   
    image:{
        type:String,
        required:true

    },
    quantity:{
        type:Number,
        required:true

    },
   
})

//create model to wishlist
const carts = new mongoose.model("carts",cartSchema)

//exporting
module.exports=carts



