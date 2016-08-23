// We need jquery in this file
var $ = require('jquery');
// Easier name to reference scope inside of this file
var thumbnail = this;

// Defining reference for jquery wrapped selector
thumbnail.element = $("[data-js='thumbnail']");

// This is called from main js when document is ready
thumbnail.init = function(modalRef){
  // Assign this as a "thumbnail global" property
  //   to reference modal through other functions in this file
  thumbnail.modal = modalRef;
  // Listening for a click on any thumbnail element
  thumbnail.element.on("click", thumbnail.handleOnClick);
}

thumbnail.handleOnClick = function(e){
  var thumbnailElement = $(this);
  var imageSource = thumbnailElement.attr("src");
  thumbnail.modal.openModal(imageSource);
}
