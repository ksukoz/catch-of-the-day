import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
          {/* <Inventory />
          <Order /> */}
        </div>
      </div>
    );
  }
}

export default App;
