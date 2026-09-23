const mongoose = require("mongoose")

const postsSchema= new mongoose.Schema({
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user"

    },

    image:{
        type:String,
        required:true
    },
    caption:{
        type:String,
       

    }

    

},{
    timestamps:true
})

const Posts = mongoose.model("posts",postsSchema)
module.exports=Posts