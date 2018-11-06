/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//  const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//     },
//     "created_at": 1461113796368
//   }
// ];

$(document).ready(function(){
//AJAX POST request that sends form data to the server
  $('form').on('submit', function(event){
    const datastring = $(this).serialize();
    event.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: datastring,
    });
  });

  const createTweetElement = (obj) =>{
    const $tweet = $('<article>').attr('class', 'tweet').appendTo('#list');
    const $header = $('<header>').attr('class', 'head').appendTo($tweet);
      $('<img>').attr('src', obj.user.avatars.small).appendTo($header);
      $('<h2>').text(obj.user.name).attr('class', 'name').appendTo($header);
      $('<p>').text(obj.user.handle).attr('class', 'userID').appendTo($header);
      $('<p>').text(obj.content.text).attr('class', 'tweet-content').appendTo($tweet);
    const $footer = $('<footer>').attr('class', 'foot').appendTo($tweet);
      $('<p>').text(obj.created_at).attr('class', 'date').appendTo($footer);
    const $icons = $('<div>').attr('class', 'icons').appendTo($footer);
      $('<i>').attr('class', 'fas fa-flag').appendTo($icons);
      $('<i>').attr('class', 'fas fa-retweet').appendTo($icons);
      $('<i>').attr('class', 'fas fa-heart').appendTo($icons);
  }

  const renderTweets = (tweets) => {
            console.log(tweets);
    for(let i in tweets){
        createTweetElement(tweets[i]);
    }
  }
  const loadTweets = () =>{
    $.ajax({
      method: 'GET',
      url: '/tweets',
      success: function(data){
        renderTweets(data);
      },
    });
  }
  loadTweets();
});
