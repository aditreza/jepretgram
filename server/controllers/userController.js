const ObjectId = require('mongodb').ObjectId
const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const errmsg = require('../helper/handle_error_message_users')
require('dotenv').config()
const secret_key = process.env.secretKey

const userFindAll = function (req, res) {
  Users.find().then( function (data_Users){
    console.log('[+] get all user')
    res.status(200).send(data_Users)
  }).catch(function (err){
    console.log('err[-] get all user')
    res.status(500).send(err)
  })
}
const userFindById = function (req,res) {
  let id = {
    _id : ObjectId(req.params.id)
  }
  Users.findById(id).then(function (data_User) {
  console.log(data_User)
  res.status(201).send(data_User)
  }).catch( function (err) {
    console.log('[-] error User find by id')
  })
}
const userCreate = function (req,res) {
  let saltRound = 10
  bcrypt.hash(req.body.password, saltRound).then(function(hash){
    let newUser = Users({
      fullname : req.body.fullname,
      username : req.body.username,
      password : hash,
      email : req.body.email,
      admin : false
    })
    console.log('new user >>', newUser)
    newUser.save().then(function(){
      res.status(201).send('[+] 1 User Created from register')
    }).catch( function (err) {
      console.log('[-] error User Create from register')
      res.send({
        msg: errmsg(err),
        err: err
      }).status(200)
    })
  }).catch(function(err){
    if(err){
      console.log('[-] password crypt')
      res.status(500).send(err)
    }
  })
}
const updateUser = function(req,res){
  let saltRound = 10
  bcrypt.hash(req.body.password, saltRound).then(function(hash){
    let id = {
      _id : ObjectId(req.params.id)
    }
    Users.findById(id).then(function(data_Users){
      data_Users.fullname = req.body.fullname,
      data_Users.username = req.body.username,
      data_Users.password = hash,
      data_Users.email = req.body.email
      
      //save update
      data_Users.save().then(function(){
        res.status(201).send('[+] 1 User Updated')
      }).catch(function(err){
        console.log('[-] error User Update')
        res.status(500).send(errmsg(err))
      })
    })
  }).catch(function(err){
    console.log('[-] update password crypt')
    res.status(500).send(err)
  })
}
const destroyUser = function (req, res) {
  let id = {
    _id : ObjectId(req.params.id)
  }
  // console.log(id, '<<<<masuk')
  Users.findByIdAndRemove(id).then(function(){
    res.status(201).send('[+] 1 User Deleted')
  }).catch(function(err){
    console.log('[-] error User Deleted')
    res.status(500).send(err)
  })
}

const SignIn = function (req, res) {
  Users.findOne({
    username: req.body.username
  }).then(function(data_User){
    if(data_User){
      bcrypt.compare(req.body.password, data_User.password).then(function(result){
        if(result){
          console.log('data user signin>>', data_User.id)
          jwt.sign({
            id : data_User.id,
            username : data_User.username
          }, secret_key, function(err, token){
            if(!err){
              console.log('this token >>', token)
              res.status(201).send({
                success: true,
                message: 'Enjoy your token!',
                token: token,
                username: data_User.fullname,
                user_Id:data_User.id
              })
            }
          })
        }else{
          res.status(403).send({
            msg: result
          })
        }
      })
    }else{
      res.status(404).send({
        msg: data_User
      })
    }
  }).catch(function(err){
    if(err){
      res.status(500).send(err)
      console.log('err >>', err)
    }
  })
}

module.exports = {
  userFindAll,
  userFindById,
  userCreate,
  updateUser,
  destroyUser,
  SignIn
}