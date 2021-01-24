import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  }

  handleUpdate = (event) => {
    const value = event.target.value;
    this.setState({ 
      numberOfEvents: value,
    })
  };

  render() {
    return(
    <div className="number-of-events">
      <label className="number-of-events-label">Number of Events</label>
      <input 
      type="number"
      className="number-input"
      value={this.state.numberOfEvents}
      ></input>
      <button className="update-button" type="update" onClick={this.handleUpdate}>Update</button>
    </div>
    );
  }
}


export default NumberOfEvents;