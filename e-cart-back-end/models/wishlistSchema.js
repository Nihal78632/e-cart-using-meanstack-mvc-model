const mongoose = require('mongoose')

//defining schema for wishlist collection to store data
const wishlistSchema= new mongoose.Schema({
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
   
})

//create model to wishlist
const wishlists = new mongoose.model("wishlists",wishlistSchema)

//exporting
module.exports=wishlists



