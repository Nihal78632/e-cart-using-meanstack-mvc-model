//importing model
const wishlists=require('../models/wishlistSchema')
const products=require('../models/productSchema')


//api calling for adding to wishlist

exports.addtowishlist=async(req,res)=>{

    try{ const {id,title,price,image}=req.body
 
     //checking if product in wishlist
 
     const item=await wishlists.findOne({
         id
 
     })
 
     if(item){
         res.status(402).json("Item already exists")
     }
     else{
        
             const newproduct= new wishlists({
                 id,
                 title,
                 price,
                 image
             })
           await  newproduct.save()
         
         res.status(200).json("Item added")
 
     }}catch(err){
         res.status(404).json(err)
 
     }
 
 
 }

 //api for showing wishlist
  exports.showwishlist=async(req,res)=>{

   try{ const allwishlists=await wishlists.find()

    if(allwishlists){
        res.status(202).json(allwishlists)

    }
    else{
        res.status(404).json("error")

    }
  }catch(err){
    res.status(404).json(err)

  }}


  //api for deleting from wishlist

exports.deletefromwish=async(req,res)=>{

    try{
        item= await wishlists.deleteOne({
            id:req.body.id

        })

        allitems=await wishlists.find()
        res.status(200).json(allitems)


        

    }catch(error){
        res.status(401).json(error)

    }
} 