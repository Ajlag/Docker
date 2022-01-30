const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");


const app = express()

app.get("/", (req,res) =>{
  res.send("<h2>Hello World</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log('listening on port ${port}'))