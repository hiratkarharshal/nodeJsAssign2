const express = require("express");
const router = express.Router();
const {etCollection, getCollection} = require("../dbConnection");

router.get("/getUsers",async (req,res) =>{
    const collection = await getCollection();
    const usersData = await collection.find().toArray();
    res.json(usersData);

});

router.post("/registerUsers",(req,res) =>{
    const collection=await getCollection();
    const result = await collection.insert(req.body);
    res.json(result);
})

module.exports = router;