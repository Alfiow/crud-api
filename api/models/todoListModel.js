'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var TaskSchema = new Schema({
  name: {
    type: String,
  },
  // os: {
  //   type: String
  // },
  // ip_address: {
  //   type: String
  // },
  // port: {
  //   type: String
  // },
  // user: {
  //   type: String
  // },
  // password: {
  //   type: String
  // },
  // app_name: {
  //   type: String
  // },
  // responsible: {
  //   type: String
  // },
  // vlan: {
  //   type: String
  // }
})

module.exports = mongoose.model('Tasks', TaskSchema)