import React, { Component } from 'react';
import './StorePicker.css';

class StorePicker extends Component {
  render() {
    return (
        <form className="storePicker">
          <h2>Please Enter A Store</h2>
          <input type="text" placeholder="Store Name" required />
          <button type="submit">Visit Store &rarr;</button>
        </form>        
    )
  }
}

export default StorePicker;