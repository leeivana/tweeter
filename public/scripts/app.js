/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function(){
  //focuses and auto selects the textarea
  const input = $('textarea');
  input.focus();
  input.select();


  $('p#empty').hide();
  $('p#length').hide();

  const getTime = (mil) => {
    const dayCreated = String(new Date(mil)).split(' ');
    const dateString = dayCreated.slice(0,4).join(' ');
    const time = dayCreated.slice(4, 5).join(' ').slice(0, 5);
    return `${time} - ${dateString}`;
  };


  const createTweetElement = (obj) =>{
    const $tweet = $('<article>').attr('class', 'tweet').prependTo('#list');
    const $header = $('<header>').attr('class', 'head').appendTo($tweet);
      $('<img>').attr('src', obj.user.avatars.small).appendTo($header);
      $('<h2>').text(obj.user.name).attr('class', 'name').appendTo($header);
      $('<p>').text(obj.user.handle).attr('class', 'userID').appendTo($header);
      $('<p>').text(obj.content.text).attr('class', 'tweet-content').appendTo($tweet);
    const $footer = $('<footer>').attr('class', 'foot').appendTo($tweet);
      $('<p>').text(getTime(obj.created_at)).attr('class', 'date').appendTo($footer);
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

  //toggle compose button animation
  $('#compose').on('click', function(){
    $('#slidingContent').slideToggle('slow');
    input.select();
  });

  //Submits when there's a keypress equal to 13 (enter key)
  $('form').keypress(function(event){
    if(event.keyCode === 13){
      $('#submit').click();
    }
  })

  //AJAX POST request that sends form data to the server
  $('form').on('submit', function(event){
    if(!$('textarea').val()){
      $('p#empty').slideDown().show();
      setTimeout(function() {
        $('p#empty').slideUp('fast');
      }, 2500);
      return false;
    }
    if($('textarea').val().length > 140){
      $('p#length').slideDown().show();
      setTimeout(function(){
        $('p#length').slideUp('fast');
      }, 2500);
      return false;
    }
    event.preventDefault();
    const datastring = $(this).serialize();
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: datastring,
    }).done(function(){
          $('textarea').val('');
          $('#list').empty();
          loadTweets();
    });
  });


});
