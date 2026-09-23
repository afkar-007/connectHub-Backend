const Posts = require("../model/posts")

const Post = async(req,res)=>{

    try{
        const {caption,postId}=req.body

        const newPost = await Posts.create({
            image:req.file.filename,
            caption:caption,
            postId:postId
        })
        res.status(201).json({
            message:"Post upload successfully"
        })


    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
        

    }

}

const fetchPost = async(req,res)=>{

    try{
        const posts = await Posts.find().populate("postId").sort({createdAt:-1})

        res.status(200).json({
            message:"Post fetched Successfully",
            posts

        })


    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }





}

const ownPost=async(req,res)=>{
    const {id} = req.params

    try{
         const ownPosts = await Posts.find(
            {postId:id} )

          res.status(200).json({
            message:"Post fetched Successfully",
            ownPosts

        })

    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }



}


const deletePosts=async(req,res)=>{
    try{
        const {id}= req.params
        const DeletePost = await Posts.findById(id)

        if(!DeletePost){
           return res.status(400).json({
                message:"Post not found"
            })
        }

        const DeletingPost= await Posts.findByIdAndDelete(id
            
        )

        res.status(200).json({
            message:"Post Deleted Successfully"
        })


    }catch(err){
        res.status(500).json({
            message:err.message
        })

    }



}









module.exports={Post,fetchPost,ownPost,deletePosts}