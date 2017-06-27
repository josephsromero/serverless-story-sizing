import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
// import config from './config';

export default class StartButton extends Component {
    
    openCardSwiping = () => {
    // here we have a full screen modal view with card and text and swipe left or right capabilities 
    var myList = '59510b19add3303370026776';
    var creationSuccess = function(data) {
      console.log('Card created successfully. Data returned:' + JSON.stringify(data));
    };
    var newCard = {
      name: 'New Test Card', 
      desc: 'This is the description of our new card.',
      // Place this card at the top of our list 
      idList: myList,
      pos: 'top'
    };
    
    window.__trelloObject.post('/cards/', newCard, creationSuccess);
    
    /*
    const res = await fetch(config.trello.getStoryCards, { // POST to our backend server with the token and board details
      method: 'GET',
      body: JSON.stringify({
      }),
    });
    const data = await res.json(); */
    }
    
    render() {
        return <RaisedButton label="Start Now" labelColor={"#FFFFFF"} backgroundColor={"#BF5700"} onTouchTap={this.openCardSwiping}/>;
    }
};
