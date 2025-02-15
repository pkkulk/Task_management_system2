const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

const User = require("../models/User");

// Route to fetch all tasks
router.post("/info", async (req, res) => {
  try {
    // Fetch tasks from the database
    const {username} =req.body;
    const result=await User.findOne({username});

    const tasks = await Task.find({userId : result._id});
    console.log(tasks); // This will log the tasks
    res.json(tasks); // Send tasks as response to the client
  } catch (error) {
    console.log("Error fetching tasks:", error);
    res.status(500).json({ message: "Error fetching tasks" }); // Handle errors
  }
});
router.post("/login",async(req,res)=>{
try{
 const {username,password}=req.body;
 const result=await User.findOne({username},{password});
 console.log("got information",username,"",password);
console.log(result);
 res.status(200).json(result);

}
catch(error){
  console.log(error);
  res.status(500).json(error);
}

})

module.exports = router;
