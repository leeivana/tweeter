# Tweeter Project

Tweeter is a simple, single-page AJAX-based Twitter clone that uses HTML5, jQuery and CSS3. Tweeter also utilizes MongoDB as a database to store tweets.


## Screenshots
!['Screenshot of Main Page'](https://github.com/leeivana/tweeter/blob/master/public/docs/main-page-tweeter.png).
!['Screenshot of Tweets'](https://github.com/leeivana/tweeter/blob/master/public/docs/show-tweets.png).
!['Screenshot of Error Message when Length is Exceeded'](https://github.com/leeivana/tweeter/blob/master/public/docs/length-exceeded-error.png).
!['Screenshot of Error Message when Submitting Empty textbox'](https://github.com/leeivana/tweeter/blob/master/public/docs/empty-tweet-error.png).

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- Chance
- MongoDB
- md52

## Getting Started
1. Fork this repository, then clone your fork of this repository.
2. Install all the dependencies (using the `npm install` command).
3. Install mongo db cli, and set up the local db server. Instructions for this can be found at : https://docs.mongodb.com/manual/installation/.
4. After following installation and setup instructions, type `mongo` in your terminal. Make sure that the following is contained within the output: connecting to: `mongodb://127.0.0.1:27017`. Remember this because it is the address to your local mongo server.
5. Within the mongo cli, type `use tweeter` and hit enter. Now exit the mongo cli by hitting 'CTRL + C' or 'Command + C' on mac.
6. Navigate to the directory with the cloned repo and run the server using the `node server/index.js` command).
7. Go to http://localhost:8080/ in you browser.

## Upcoming Features
- Login, Logout and Register functions.
