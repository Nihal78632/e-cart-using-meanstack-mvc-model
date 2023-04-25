//omport product collection/model
const products=require('../models/productSchema')





//get all products api


exports.getallproducts=async(req,resp)=>{

    //logic
   try{ 
    //get all products from products collection in mongodb
    allproducts = await  products.find()
    resp.status(200).json(allproducts)
}catch(error){
resp.status(401).json(error)
}
}

//viewproduct api
exports.viewproduct=async(req,resp)=>{

    //taking id from parameter
    const id=req.params.id

    //checking if id is present in mongodb
    try{
        const product = await products.findOne({
            id
        })
        if(product){

            resp.status(200).json(product)

        }else{
            resp.status(404).json("product not found")
        }

    }catch(err){
        resp.status(404).json(err)

    }

}