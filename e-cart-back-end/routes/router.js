// to define routes for client requests

const express=require('express')

//importing product controller
const prodcontroller=require('../controllers/productController')

//importing wishlist controller
const wishlistcontroller=require('../controllers/wishlistController')

//importing cart controller
const cartcontroller=require('../controllers/cartController')

//using express create object for router class inorder to setup path

const router=new express.Router()

//resolve client req in various server routes

//api
//get-all api
router.get('/products/allproducts',prodcontroller.getallproducts)

//view product api

router.get('/products/viewproduct/:id',prodcontroller.viewproduct)

//wishlistapi
router.post('/wishlist/add-product',wishlistcontroller.addtowishlist)

//showwishlist
router.get('/products/wishlist',wishlistcontroller.showwishlist)

//deletefromwishlist
router.post('/wishlist/delete-product',wishlistcontroller.deletefromwish)

//addtocart
router.post('/addtocart',cartcontroller.addtocart)

//getcart
router.get('/getcart',cartcontroller.getcart)






//exporting router
module.exports=router

