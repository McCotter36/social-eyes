import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 20,
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
    this.setState({ 
      numberOfEvents: value,
    })
  };

  render() {
    return(
    <div className="NumberOfEvents">
      <label className="number-of-events-label">Number of Events</label>
      <input 
      type="number"
      className="number-input"
      value={this.state.numberOfEvents}
      onChange={this.handleInputChanged}
      ></input>
    </div>
    );
  }
}


export default NumberOfEvents;