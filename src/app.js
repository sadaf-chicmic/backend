const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const app=express();
app.use(express.json());
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec));

const studentRoutes = require("./routes/user.routes");
app.use("/students",studentRoutes);

app.get("/",(req,res)=>{
    res.send("CRUD apis for students");
})

module.exports=app;