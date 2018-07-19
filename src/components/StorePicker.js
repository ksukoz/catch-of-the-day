import React, { Component } from 'react';
import './StorePicker.css';
import { getFunName } from './helpers';

class StorePicker extends Component {
  render() {
    return (
        <form className="storePicker">
          <h2>Please Enter A Store</h2>
          <input type="text" placeholder="Store Name" required defaultValue={getFunName()} />
          <button type="submit">Visit Store &rarr;</button>
        </form>        
    )
  }
}

export default StorePicker;