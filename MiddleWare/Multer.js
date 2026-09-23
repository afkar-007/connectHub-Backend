const multer = require("multer")
const {cloudinaryStorage, CloudinaryStorage}=require("multer-storage-cloudinary")
const cloudinary = require("../config/cloudinary")

const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"connectHub",
        allowed_formats: ["jpg", "jpeg", "png", "webp"]
    }
})
const upload = multer({
    storage:storage
})



module.exports=upload