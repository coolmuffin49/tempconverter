import React, { Component } from 'react';
import Converter from './Converter';
import Temp from './Temp';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TConverter">Temperature Converter</div>
        <div className="Converter">
        <div className="image"></div>
          <Converter />
        </div>
      </div>
    );
  }
}

export default App;
