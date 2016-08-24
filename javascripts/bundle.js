(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
