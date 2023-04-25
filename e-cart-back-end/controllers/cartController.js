const cart=require('../models/cartSchema')

//adding to cart
exports.addtocart=async(req,res)=>{

    try{ const {id,title,price,image}=req.body
 
     //checking if product in wishlist
 
     const item=await cart.findOne({
         id
 
     })
 
     if(item){
         item.quantity= item.quantity+1
         item.save()
         res.status(200).json("Items added to cart")
     }
     else{
        
             const newproduct= new cart({
                 id,
                 title,
                 price,
                 image,
                 quantity:1
             })
           await  newproduct.save()
         
         res.status(200).json("Item added to cart..")
 
     }}catch(err){
         res.status(404).json(err)
 
     }
 
 
 }

 //getting cart

 exports.getcart=async(req,res)=>{
    try{
        allcart=await cart.find()
        res.status(200).json(allcart)


    }catch(err){
        res.status(404).json(err)

    }
 }