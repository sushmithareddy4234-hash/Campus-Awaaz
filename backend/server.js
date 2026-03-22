const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const issueRoutes = require("./routes/issueRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/campusawaaz")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// routes
app.use("/issues", issueRoutes);

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});