const express = require("express")
const cors = require("cors")
require("dotenv").config()

const UserRoutes = require("./Routes/userRoutes")
const PostRouter = require("./Routes/PostRoutes")

const app = express()

const ConnectDb = require("./config/Db")


// ================= CORS =================

app.use(cors({
    origin:[ "http://localhost:5173",
    "https://connect-hub-sage.vercel.app"]
}))


// ================= JSON =================

app.use(express.json())


// ================= DATABASE =================

ConnectDb()


// ================= HOME =================

app.get("/", (req, res) => {
    res.send("Connect hub backend is running")
})


// ================= ROUTES =================

app.use("/users", UserRoutes)

app.use("/post", PostRouter)

app.use("/uploads", express.static("uploads"))


// ================= SERVER =================

const PORT = process.env.PORT || 3000

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Connect hub backend is running on port ${PORT}`)
})