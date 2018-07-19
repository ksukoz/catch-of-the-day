import React, { Component } from 'react';
import './StorePicker.css';
import { getFunName } from './helpers';

class StorePicker extends Component {
  myInput = React.createRef();

  goToStore = event => {
    event.preventDefault();
    this.props.history.push(`/store/${this.myInput.current.value}`);
  }

  render() {
    return (
        <form className="storePicker" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input 
            type="text" 
            ref={this.myInput}
            placeholder="Store Name" 
            defaultValue={getFunName()} 
            required 
          />
          <button type="submit">Visit Store &rarr;</button>
        </form>        
    )
  }
}

export default StorePicker;