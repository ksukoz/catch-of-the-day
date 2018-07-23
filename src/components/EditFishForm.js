import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string, 
      name: PropTypes.string, 
      price: PropTypes.number, 
      desc: PropTypes.string, 
      status: PropTypes.string
    }),
    index: PropTypes.string,
    updatedFish: PropTypes.func
  };

  handleChange = e => {
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.updatedFish(this.props.index, updatedFish)
  }

  render() {
    return <div className="fish-edit">
      <input 
        type="text" 
        name="name" 
        value={this.props.fish.name} 
        onChange={this.handleChange} 
      />
      <input 
        type="number" 
        name="price" 
        value={this.props.fish.price} 
        onChange={this.handleChange} 
      />
      <select 
        name="status" 
        value={this.props.fish.status} 
        onChange={this.handleChange} 
      >
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea 
        name="desc" 
        value={this.props.fish.desc} 
        onChange={this.handleChange} 
      ></textarea>
      <input 
        type="text" 
        name="image" 
        value={this.props.fish.image} 
        onChange={this.handleChange} 
      />
      <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
    </div>
  }
}

export default EditFishForm;