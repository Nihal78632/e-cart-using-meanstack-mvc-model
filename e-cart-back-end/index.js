// automatically loading env files to application
require('dotenv').config()

//import express
const express=require('express')

//using express,creating server
const server=express()

// importing cors

const cors=require('cors')

//importing connection
 require('./db/connection')

 //importing router
 const router=require('../e-cart-back-end/routes/router')

//using cors
server.use(cors())

//parsing
server.use(express.json())

//using server for routing
server.use(router)


//storing port number
const PORT=3000

//setting routes
// server.get('/',(req,resp)=>{
//     resp.status(200).json('E cart started!')
// })

//running server
server.listen(PORT,()=>{console.log(`e cart server started at port ${PORT}`);})


