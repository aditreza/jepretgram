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

module.exports = {
  userFindAll
}