const mongoose=require('mongoose')
module.exports=mongoose.connect('mongodb://localhost:27017/Vlog')
const userSchema=new mongoose.Schema({
  name:String,
  email:String,
  password:Number,
})
module.exports=mongoose.model("users",userSchema)