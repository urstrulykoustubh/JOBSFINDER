const mongoose = require('mongoose')

dbConnect()
async function dbConnect(){
    try{
        await mongoose.connect('mongodb+srv://koustubh:Koustubh1503@react-next-aws.pisiz.mongodb.net/jobfinder',{useNewUrlParser:true})
        console.log("MONGODB CONNECTION SUCCEEDED")
    }catch(error){
        console.log("FAILED MONGDOB")
    }


}

module.exports=mongoose