import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import config from '../../config';
import 'whatwg-fetch';

export default class StartButton extends Component {
    
    async getCardsFromLambda() { 
        const token = window.__trelloObject.token();
        const boardId = "jpuP1FpB";
        
        const res = await fetch(config.trello.getStoryCards, { // GET to our backend server with the token and board id
            method: 'POST',
            body: JSON.stringify({
                token,
                boardId,
            }),
        });
        const data = await res.json(); 
        console.log(data.cards);
    }

    render() {
        return <RaisedButton label="Start Now" labelColor={"#FFFFFF"} backgroundColor={"#BF5700"} onTouchTap={this.getCardsFromLambda}/>;
    }
};
