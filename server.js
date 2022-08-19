require("dotenv").config()
const express = require('express');
var cors = require("cors");


const app = express()

app.use(express.json());
app.use(cors());


app.route("/")
.get(async (req, res) => {
    console.log("home hitted");
})
.post(async (req, res) => {
    console.log("post")
    console.log(req.body);
})

app.listen(5000,()=>{
    console.log("server listing on port 5000");
})