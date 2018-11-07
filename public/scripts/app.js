/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function(){

  const createTweetElement = (obj) =>{
    const $tweet = $('<article>').attr('class', 'tweet').prependTo('#list');
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
//AJAX POST request that sends form data to the server
  $('form').on('submit', function(event){
    if(!$('textarea').val()){
      alert('Empty textbox');
    }
    if($('textarea').val().length > 140){
      alert('Character count exceeded');
    }
    event.preventDefault();
    const datastring = $(this).serialize();
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: datastring,
    });
    loadTweets();
    $('textarea').val('');
  });
});
