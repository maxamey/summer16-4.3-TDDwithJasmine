var profile = this;

profile.init = function(){

  var requestMain = new XMLHttpRequest();
  var name = document.querySelector(".name");
  var blog = document.querySelector(".blog");
  var location = document.querySelector(".location");
  var email = document.querySelector(".email");
  var url__avatar = document.querySelector(".url__avatar");
  var url__html = document.querySelector(".url__html");
  var following = document.querySelector("[data-js='following']");
  var followers = document.querySelector("[data-js='followers']");

  requestMain.addEventListener("load", function(e){
    var contentMain = JSON.parse(e.target.response);
    name.textContent = profile.getName(contentMain);
    blog.textContent = profile.getBlog(contentMain);
    location.textContent = profile.getLocation(contentMain);
    email.textContent = profile.getEmail(contentMain);
    following.textContent = profile.getFollowing(contentMain);
    followers.textContent = profile.getFollowers(contentMain);
    url__html.href = contentMain.html_url;
    url__avatar.src = contentMain.avatar_url;
    console.log(contentMain);
  });

  requestMain.open("GET", "https://api.github.com/users/maxamey");
  requestMain.send(null);
};

profile.getName = function(responseJSON){
  return responseJSON.name;
};

profile.getBlog = function(responseJSON){
  return responseJSON.blog;
};

profile.getLocation = function(responseJSON){
  return responseJSON.location;
};

profile.getEmail = function(responseJSON){
  return responseJSON.email;
};

profile.getFollowing = function(responseJSON){
  return responseJSON.following;
};

profile.getFollowers = function(responseJSON){
  return responseJSON.followers;
};
