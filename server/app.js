const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const app = express()

//parse application/json and look for raw text      
app.use(morgan('dev'))         
app.use(cors())                         
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));

// connect db
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/aditreza')
.then(function(){
  console.log('[+] database is listen');
}).catch(function(err){
  if(err){
    console.error(err)
  }
})

//routes
const users = require('./routes/user')
const photo = require('./routes/photo')

app.get('/', (req, res) => res.json({message: "Welcome to jepretgram API!"}))
app.use('/api/users', users)
app.use('/api/photos', photo)

app.listen(PORT, function(err){
  if(!err){
    console.log(`[+] server listen on PORT | 3000`);
  }
})