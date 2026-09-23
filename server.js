const express = require("express")
const cors = require("cors")

const UserRoutes = require("./Routes/userRoutes")
const PostRouter = require('./Routes/PostRoutes')


const app = express()
const ConnectDb = require("./config/Db")


app.use(cors())
app.use(express.json())

ConnectDb()

app.get('/',(req,res)=>{
    res.send("Connect hub backend is running")

})

app.use('/users',UserRoutes)
app.use('/post',PostRouter)
app.use('/uploads',express.static("uploads"))




app.listen(3000,()=>{

    console.log("Connect hub backend is running");
    

})
