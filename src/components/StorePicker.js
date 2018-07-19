import React, { Fragment } from 'react';

class StorePicker extends React.Component {
  render() {
    return (
        <form className="store-selector">
          <h2>Please Enter A Store</h2>
          <input type="text" placeholder="Store Name" required />
          <button type="submit">Visit Store &rarr;</button>
        </form>        
    )
  }
}

export default StorePicker;