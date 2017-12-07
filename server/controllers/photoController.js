const ObjectId = require('mongodb').ObjectId
const Photos = require('../models/photoModel')

const findAllPhoto = function (req, res) {
  Photos.find().then(function (data_Photos) {
    console.log('[+] get all photo', data_Photos)
    res.status(200).send(data_Photos)
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
  let newPhoto = Photos({
    title : req.body.title,
    photo : req.body.photo,
    author : req.body.author,
    like : req.body.like
  })
  newPhoto.save().then(function(){
    res.status(201).send('[+] 1 photo Created')
  }).catch( function (err) {
    console.log('[-] error photo Created')
    res.send({
      msg: errmsg(err),
      err: err
    }).status(200)
  })
}
const updatePhoto = function(req,res){
  let id = {
    _id : ObjectId(req.params.id)
  }
  Photos.findById(id).then(function(data_Photo){
    data_Photo.title = req.body.title,
    data_Photo.photo = req.body.photo,
    data_Photo.author = req.body.author,
    data_Photo.like = req.body.like
    
    //save update
    data_Photo.save().then(function(){
      res.status(201).send('[+] 1 Photo Updated')
    }).catch(function(err){
      console.log('[-] error Photo Update')
      res.status(500).send(errmsg(err))
    })
  })
}
const destroyPhoto = function (req, res) {
  let id = {
    _id : ObjectId(req.params.id)
  }
  Photos.findByIdAndRemove(id).then(function(){
    res.status(201).send('[+] 1 photo Deleted')
  }).catch(function(err){
    console.log('[-] error photo Deleted')
    res.status(500).send(err)
  })
}


module.exports = {
  findAllPhoto,
  photoFindById,
  photoCreate,
  updatePhoto,
  destroyPhoto
}