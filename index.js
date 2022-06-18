const express = require("express");
const app= express();
const port = 8080;
const {getCollection} = require("./dbConnection");
const userRoutes = require("./views/userRoutes");

app.use(express.json());
app.use(userRoutes);

app.set("view engine","ejs");

app.get("/",async(req,res)=>{
    
    const collection = await getCollection();
    const usersData = await collection.find().toArray();
    res.render("index.ejs",{users: usersData})
})
app.listen(port,()=>{
    console.log(`Server started running on port ${port}`);
})