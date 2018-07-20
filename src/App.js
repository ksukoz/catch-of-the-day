import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Order from './components/Order';
import Inventory from './components/Inventory.js';
import sampleFishes from './sample-fishes';
import Fish from './components/Fish';

class App extends Component {

  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes
    })
    console.log(this.state)
  };

  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes})
  };

  addToOrder = (key) => {
    const order = {...this.state.order};

    order[key] = order[key] + 1 || 1;

    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish 
              key={key} 
              index={key}
              details={this.state.fishes[key]} 
              addFish={this.addToOrder} 
            />)}
            {/* <Fish /> */}
          </ul>
        </div>
        <Order {...this.state} />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    );
  }
}

export default App;
