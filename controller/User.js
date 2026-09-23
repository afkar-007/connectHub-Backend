const bcrypt = require("bcrypt")
const Users = require ("../model/users")



const register = async(req,res)=>{
    
    try{
        const {name,password,email}=req.body

        const hashPass= await bcrypt.hash(password,10)

        const existingUser= await Users.findOne({email})
        
        if(existingUser){
           return  res.status(404).json({
                message:"user already exist change email"
            })
        }
        const existingName=  await Users.findOne({name})

        if(existingName){
            return res.status(405).json({
                message:"user name already exist change user name"
            })
        }





        const user = await Users.create({
            name:name,
            password:hashPass,
            email:email

                                        })

        res.status(201).json({
            message:"Registration Successful"
                             })
 }
    catch(err){
        res.status(500).json({
            message:err.message
        })

 }

}


const Login = async (req,res)=>{

    try{
        const {email,password}=req.body

        const user = await Users.findOne({email})

        if(!user){
           return res.status(400).json({
                message:"invalid email or password"
            })
        }

        const check = await bcrypt.compare(password,user.password)

        if(!check){
            return res.status(400).json({
                message:"invalid email or password"
            })

        }

        res.status(200).json({
            message:"Login Successful",
            id:user._id
        })



    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }




}

const Profile =async(req,res)=>{
    try{
        const {id}= req.params;


        const profile = await Users.findById(id).select("-password")

        res.status(200).json({
            message:" profile data fetched Successfully",
            profile:profile
        })



    }catch(err){
        res.status(500).json({
            message:err.message
        })
        
    }

}
















module.exports={register,Login,Profile}
