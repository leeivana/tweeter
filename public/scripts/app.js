/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}




$(document).ready(function(){
  // $('#submit').on('click', createTweetElement(){
  // });

    const createTweetElement = () =>{
    const name = tweetData.user.name;
    const avatar = tweetData.user.avatars.small;
    const userID = tweetData.user.handle;
    const tweet = tweetData.content.text;
    const time = tweetData['created_at'];
    const $tweet = $('<article>').attr('class', 'tweet').appendTo('#list');
    $('<header>').attr('class', 'head').appendTo($tweet);
      $(`<img src='${avatar}'>`).appendTo('.head');
      $('<h2>').text(name).attr('class', 'name').appendTo('.head');
      $('<p>').text(userID).attr('class', 'userID').appendTo('.head');
    $('<p>').text(tweet).attr('class', 'tweet-content').appendTo($tweet);
    $('<footer>').attr('class', 'foot').appendTo($tweet);
      $('<p>').text(time).attr('class', 'date').appendTo('.foot');
      $('<div>').attr('class', 'icons').appendTo('.foot');
        $('<i>').attr('class', 'fas fa-flag').appendTo('.icons');
        $('<i>').attr('class', 'fas fa-retweet').appendTo('.icons');
        $('<i>').attr('class', 'fas fa-heart').appendTo('.icons');
    console.log($tweet);
    console.log('hi');
    return $tweet;
  }
  createTweetElement();
});




// createTweetElement(tweetData);

// var $tweet = $("<article>").addClass("tweet");