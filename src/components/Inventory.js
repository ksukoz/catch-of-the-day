import React, { Component } from 'react';
import AddFishForm from './AddFishForm';
import fishes from '../sample-fishes';
import EditFishForm from './EditFishForm';

class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fish).map(key => <EditFishForm 
          fish={this.props.fish[key]} 
          updatedFish={this.props.updatedFish} 
          deleteFish={this.props.deleteFish}
          key={key} 
          index={key} 
        />)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    )
  }
} 

export default Inventory;