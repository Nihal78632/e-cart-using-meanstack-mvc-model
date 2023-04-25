// defining mongo db connections

//importing mongoose
 const mongoose=require('mongoose')

 const DB=process.env.DATABASE

 //using mongoose

 mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
 }).then(()=>{
    console.log("database connected successfully");
 }).catch((err)=>{
    console.log(err);
 })