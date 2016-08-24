var Tweet = require("../lib/tweet.js");

// What you're describing (string), callback function (anonymous)
describe("Tweet", function(){
  // What it should do: (string), callback function (anonymous)
  it("creates html string with a text area", function(){
    // some function to make a string that equals a text area
    expect(Tweet.renderTextArea()).toEqual(`<textarea placeholder="Write your Tweet Here" data-js="tweetTextarea"></textarea>`);
  });

  it("creates html string with a tweet button", function(){
    expect(Tweet.renderTweetButton()).toEqual(`<input type="submit" name="tweet" value="tweet" data-js="submit"/>`);
  });

  it("creates html string of tweet list", function(){
    expect(Tweet.renderTweetList()).toEqual(`<ul class="tweetList" data-js="tweetList"></ul>`);
  });

  it("creates html string of new tweet for list", function(){
    expect(Tweet.renderTweetListItem("Just had a delicious Empanada?")).toEqual(`<li>Just had a delicious Empanada?</li>`);
  })

  it("handles the click of submit button and adds to the list", function(){
    // Tweet.handleOnClickSubmit()
  });
});
