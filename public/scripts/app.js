/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": {
//       "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//       "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//       "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//     "handle": "@SirIsaac"
//   },
//   "content": {
//     "text": "If I have seen further it is by standing on the shoulders of giants"
//   },
//   "created_at": 1461116232227
// }


 const data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

$(document).ready(function(){
  // $('#submit').on('click', createTweetElement(){
  // });

  const createTweetElement = (obj) =>{
    const name = obj.user.name;
    const avatar = obj.user.avatars.small;
    const userID = obj.user.handle;
    const tweet = obj.content.text;
    const time = obj['created_at'];
    const key = userID.slice(1);
    const $tweet = $('<article>').attr('class', 'tweet').attr('id', 'article' + key).appendTo('#list');
    $('<header>').attr('class', 'head').attr('id', 'head' + key).appendTo('#article' + key);
      $(`<img src='${avatar}'>`).appendTo('#head' + key);
      $('<h2>').text(name).attr('class', 'name').appendTo('#head' + key);
      $('<p>').text(userID).attr('class', 'userID').appendTo('#head' + key);
    $('<p>').text(tweet).attr('class', 'tweet-content').appendTo('#article' + key);
    $('<footer>').attr('class', 'foot').attr('id', 'foot' + key).appendTo($tweet);
      $('<p>').text(time).attr('class', 'date').appendTo('#foot' + key);
      $('<div>').attr('class', 'icons').attr('id', 'div' + key).appendTo('#foot' + key);
        $('<i>').attr('class', 'fas fa-flag').appendTo('#div' + key);
        $('<i>').attr('class', 'fas fa-retweet').appendTo('#div' + key);
        $('<i>').attr('class', 'fas fa-heart').appendTo('#div' + key);

  }

  const renderTweets = (tweets) => {
        // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for(let i = 0; i < tweets.length; i++){
        createTweetElement(tweets[i]);
    }
  }
  return renderTweets(data);
});





// createTweetElement(tweetData);

// var $tweet = $("<article>").addClass("tweet");