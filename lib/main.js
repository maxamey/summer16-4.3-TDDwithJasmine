// Requiring that this dependency is available and loaded.
var $ = require('jquery');
var modal = require('./modal.js');
var thumbnail = require('./thumbnail.js');

$(function(){
  thumbnail.init(modal);
})
