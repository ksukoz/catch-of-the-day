import React, { Component } from 'react';

class EditFishForm extends Component {
  handleChange = e => {
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.updatedFish(this.props.index, updatedFish)
  }

  render() {
    return <div className="fish-edit">
      <input type="text" name="name" value={this.props.fish.name} onChange={this.handleChange} />
        <input type="number" name="price" value={this.props.fish.price} onChange={this.handleChange} />
        <select name="status" value={this.props.fish.status} onChange={this.handleChange}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" value={this.props.fish.desc} onChange={this.handleChange} ></textarea>
        <input type="text" name="image" value={this.props.fish.image} onChange={this.handleChange} />
        <button type="submit">Add Fish</button>
    </div>
  }
}

export default EditFishForm;