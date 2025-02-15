const express=require("express");
const mongo = require("mongoose");
const cors = require("cors");

const Task = require("./models/Task");
const T =require("./Routes/TaskRoutes");
const { default: mongoose } = require("mongoose");
  
require("dotenv").config();
const app=express();

const cors = require("cors");

// Allow requests from your frontend domain
const corsOptions = {
  origin: "https://task-management-system2.vercel.app", // Your frontend URL
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/TaskRoutes",T);
mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("connected to mongoDB")} )
.catch((error)=> console.log("Error connecting to mongoDB",error));
const PORT =process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log("server is running on port",PORT);
});