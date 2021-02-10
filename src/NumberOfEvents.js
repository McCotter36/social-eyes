import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 20,
    infoText: ''
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);
    this.setState({ 
      numberOfEvents: value,
    });

    if (value < 1 || value > 20) {
      this.setState({
        infoText: "Please choose a number between 1 & 20",
      });
    } else {
      this.setState({
        infoText: "",
      });
    }
  };

  render() {
    return(
    <div className="numberOfEvents">
      <ErrorAlert className="alert" text={this.state.infoText} />
      <br></br>
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