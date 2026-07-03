const express = require("express");

const app=express();
app.use(express.json());

const studentRoutes = require("./routes/user.routes");
app.use("/students",studentRoutes);

app.get("/",(req,res)=>{
    res.send("CRUD apis for students");
})

module.exports=app;