const express = require("express");
const app = express();
const dotenv = require("dotenv")
const helmet = require("helmet")
const mongoose = require("mongoose")
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("connection successful")).catch((err)=>{console.log(err)} );

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute)
app.use("/api/posts",postRoute)

app.get("/",(req,res)=>{
    res.send("welcome to user page")

})

app.listen(8000,()=>{
    console.log("Backend server is running");
})