// Example spec
// Import your files here... don't forget "../lib/<fileName>.js"
var profile = require("../lib/profile.js");

describe("profile", function(){
  it("should get name from response object", function(){
    var responseJSON = {name: "Max"};
    expect(profile.getName(responseJSON)).toBe("Max");
  });

  it("should get the blog from the response object", function(){
    var responseJSON = {blog: "google.com"};
    expect(profile.getBlog(responseJSON )).toBe("google.com");
  });

  it("should get location from the response object", function(){
    var responseJSON = {location: "San Antonio"};
    expect(profile.getLocation(responseJSON)).toBe("San Antonio");
  });

  it("should get the the email address from the response object", function(){
    var responseJSON = {email: "maxwellamey@gmail.com"};
    expect(profile.getEmail(responseJSON)).toBe("maxwellamey@gmail.com");
  });

  it("should get the value of the followers from the response object", function(){
    var responseJSON = {followers: 1};
    expect(profile.getFollowers(responseJSON)).toBe(1);
  });

  it("should get the value of the following from the response object", function(){
    var responseJSON = {following: 0};
    expect(profile.getFollowing(responseJSON)).toBe(0);
  });
});
