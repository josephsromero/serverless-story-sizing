'use strict';

const trello = require('trello')(process.env.TRELLO_SECRET_KEY);

// Function: storyCards.get
// This is the function to get all story cards that need sizing 
// NOTE: this does not prune the list of cards so it will grab all cards from a board atm 
module.exports.get = (event, context, callback) => {
  const requestBody = JSON.parse(event.body);
  const token = requestBody.token.id;
  
  const response = {
    statusCode: 200,
    headers: {
          'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      message: 'Get happened!',
      input: event,
    }),
  };
  callback(null, response);
};

module.exports.update = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Put!',
      input: event,
    }),
  };

  callback(null, response);
};
