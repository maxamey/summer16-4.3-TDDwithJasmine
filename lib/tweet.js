// Tweet

var tweet = this;

tweet.init = function(){
  tweet.replaceHTML();
  
  document.querySelector("[data-js='submit']").addEventListener("click", tweet.handleOnClickSubmit);
}

// Handle click function
tweet.handleOnClickSubmit = function(e){
  // Append newly rendered tweet to the list of tweets
  var tweetListElement = document.querySelector("[data-js='tweetList']");

  var tweetTextareaElement = document.querySelector("[data-js='tweetTextarea']")

  tweetListElement.innerHTML += tweet.renderTweetListItem(tweetTextareaElement.value);
}

// Render a new tweet for list
tweet.renderTweetListItem = function(tweetString){
  return `<li>${tweetString}</li>`;
}

tweet.renderTextArea = function(){
  return `<textarea placeholder="Write your Tweet Here" data-js="tweetTextarea"></textarea>`;
}

tweet.renderTweetButton = function(){
  return `<input type="submit" name="tweet" value="tweet" data-js="submit"/>`;
}

tweet.renderTweetList = function(){
  return `<ul class="tweetList" data-js="tweetList"></ul>`;
}

// Add to html...
// Waiting for spy()'s
tweet.replaceHTML = function(){
  document.write(tweet.renderTextArea() + tweet.renderTweetButton() + tweet.renderTweetList());
}
