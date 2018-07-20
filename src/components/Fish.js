import React, { Component } from 'react';
import { formatPrice } from './helpers';

class Fish extends Component {
  handleClick = () => {
    this.props.addFish(this.props.index);
  };

  render() {
    const {image, name, price, desc, status} = this.props.details;
    const isAvaliable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name}/>
        <h3 className="fish-name">{name}
          <span>{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvaliable} onClick={this.handleClick}>{isAvaliable ? 'Add To Cart' : 'Sold Out!'}</button>
      </li>
    )
  }
} 

export default Fish;