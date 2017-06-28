'use strict';
const Trello = require("trello");

// Function: storyCards.get
// This is the function to get all story cards that need sizing 
// NOTE: this does not prune the list of cards so it will grab all cards from a board atm 
module.exports.get = (event, context, callback) => {
  const requestBody = JSON.parse(event.body);
  const token = requestBody.token;
  const boardId = requestBody.boardId;
  
  const trelloApi = new Trello(process.env.TRELLO_API_KEY, token);
  var cardsPromise = trelloApi.getCardsOnBoard(boardId);
  cardsPromise.then((cards) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        message: 'Got all of the cards on the board!',
        cards,
      }),
    };
    callback(null, response);
  });
};
