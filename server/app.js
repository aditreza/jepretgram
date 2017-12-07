const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const app = express()

//routes
app.get("/", (req, res) => res.json({message: "Welcome to hacktiveoverflow API!"}))

app.listen(PORT, function(err){
  if(!err){
    console.log(`[+] server listen on PORT | 3000`);
  }
})