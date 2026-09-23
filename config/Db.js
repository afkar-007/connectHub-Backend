const mongoose = require("mongoose")

async function ConnectDb() {

    try{
    mongoose.connect(process.env.MONGO_URI)

    console.log("Mongo db Connected Successfully")

    }
    catch(err){
        console.log(err.message);
        
        
    }
}

module.exports=ConnectDb



