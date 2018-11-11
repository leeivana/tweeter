"use strict";

// Simulates the kind of delay we see with network or filesystem operations

// Defines helper functions for saving and getting tweets, using the database `db`
const mongo       = require('mongodb');

module.exports = function makeDataHelpers(db) {
  return {
    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
        try {
            db.collection('tweets').insertOne(newTweet);
        } catch(err) {
            callback(err);
        }
        callback(null);
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
        db.collection('tweets').find().toArray(callback);
    },

    // Update the amount of likes for a certain tweet in `db`
    getLikes: function(id, replace, callback){
        try{
            db.collection('tweets').findOneAndUpdate({_id: new mongo.ObjectID(id)}, replace, (err, response) => {
                if (err){
                    callback(err);
                }
                callback(null);
            })
        } catch (err) {
            callback(err);
        }
    }

  };
}
