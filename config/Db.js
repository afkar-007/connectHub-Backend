const mongoose = require("mongoose")

async function ConnectDb() {

    try{
    mongoose.connect("mongodb://localhost:27017/connectHub")

    console.log("Mongo db Connected Successfully")

    }
    catch(err){
        console.log(err.message);
        
        
    }
}

module.exports=ConnectDb



