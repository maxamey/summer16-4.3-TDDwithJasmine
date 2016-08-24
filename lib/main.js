document.addEventListener("DOMContentLoaded", function(){

  var requestMain = new XMLHttpRequest();
  var name = document.querySelector(".name");
  var blog = document.querySelector(".blog");
  var location = document.querySelector(".location");
  var email = document.querySelector(".email");
  var url__avatar = document.querySelector(".url__avatar");
  var url__html = document.querySelector(".url__html");

  requestMain.addEventListener("load", function(e){
    var contentMain = JSON.parse(e.target.response);
    name.textContent = contentMain.name;
    blog.textContent = contentMain.blog;
    location.textcontent = contentMain.location;
    email.textContent = contentMain.email;
    url__html.href = contentMain.html_url;
    url__avatar.src = contentMain.avatar_url;
    console.log(contentMain);
  });










  requestMain.open("GET", "https://api.github.com/users/maxamey");
  requestMain.send(null);
});
