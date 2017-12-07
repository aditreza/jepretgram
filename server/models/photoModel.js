const mongoose = require('mongoose')
const Schema = mongoose.Schema

const photoSchema = new Schema({
  title : {
    type : String,
    required : true,
    trim : true
  },
  photo : {
    type : String,
    required : true
  },
  create_at : {
    type : Date,
    default : Date.now
  },
  author : {
    type : Schema.Types.ObjectId,
    ref : 'User'
  },
  like : [{
    type : Schema.Types.ObjectId,
    ref : 'User'
  }]
})

const photoModels = mongoose.model('Photo', photoSchema)
module.exports = photoModels