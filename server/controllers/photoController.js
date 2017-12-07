const ObjectId = require('mongodb').ObjectId
const Photos = require('../models/photoModel')

const findAllPhoto = function (req, res) {
  Photos.find().then(function (data_Photos) {
    console.log('[+] get all photo')
    res.status(200).send(data_Users)
  }).catch(function (err){
    console.log('err[-] get all photo')
    res.status(500).send(err)
  })
}
const photoFindById = function (req,res) {
  let id = {
    _id : ObjectId(req.params.id)
  }
  Photos.findById(id).then(function (data_Photo) {
    console.log('[+] get by id photo')
    res.status(201).send(data_Photo)
  }).catch( function (err) {
    console.log('[-] error photo find by id')
  })
}
const photoCreate = function (req,res) {
  let saltRound = 10
  bcrypt.hash(req.body.password, saltRound).then(function(hash){
    let newPhoto = Photo({
      title : req.body.title,
      photo : req.body.photo,
      author : req.body.author,
      like : req.body.like
    })
    console.log('new photo >>', newPhoto)
    // newPhoto.save().then(function(){
    //   res.status(201).send('[+] 1 photo Created')
    // }).catch( function (err) {
    //   console.log('[-] error User Create photo')
    //   res.send({
    //     msg: errmsg(err),
    //     err: err
    //   }).status(200)
    // })
  }).catch(function(err){
    if(err){
      console.log('[-] password crypt')
      res.status(500).send(err)
    }
  })
}


module.exports = {
  findAllPhoto,
  photoFindById,
  photoCreate
}