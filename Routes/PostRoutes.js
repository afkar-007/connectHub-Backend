const express = require("express")

const PostRouter = express.Router()

const {Post,fetchPost,ownPost,deletePosts}=require("../controller/Post")

const upload = require("../MiddleWare/Multer")

PostRouter.post("/post",upload.single("image"),Post)
PostRouter.get("/fetchPost",fetchPost)
PostRouter.get("/ownPost/:id",ownPost)
PostRouter.delete("/delete/:id",deletePosts)

module.exports=PostRouter



