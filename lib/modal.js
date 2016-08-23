// We need jquery in this file
var $ = require('jquery');

var modal = this;
modal.showClass = "modal--show";
modal.parent = $("[data-js='modal']");
modal.image = modal.parent.find("[data-js='modal-image']");

modal.closeModal = function(){
  // ... toggle the class to close the modal
  modal.parent.removeClass(modal.showClass);
  // Keeping memory clean...
  //   removing the click reference that is added inside of "openModal" method
  modal.parent.off("click");
}

modal.openModal = function(imageSource){
  // ... toggle the class to open the modal
  modal.parent.addClass(modal.showClass);
  // ... shows the image
  // http://api.jquery.com/attr/
  modal.image.attr("src", imageSource);
  // Add listener to self when opened
  modal.parent.on("click", modal.closeModal);
}
