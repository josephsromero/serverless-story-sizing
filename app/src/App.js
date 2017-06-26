import React, { Component } from 'react';
import StartButton from './components/button/StartButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './Texas_Longhorns_logo.svg';
import './App.css';
import devConfig from './config';

export default class App extends Component {

  startSizing () {
    // here we have a full screen modal view with card and text and swipe left or right capabilities 
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Lets start sizing some stories!</h2>
          </div>
          <p className="App-intro">
            Just hit the button below to enter the room.
          </p>
          <StartButton />
        </div>
      </MuiThemeProvider>
    );
  }
};
