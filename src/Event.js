import React, { Component } from 'react';



class Event extends Component {
  state = {
    showDetails: false,
  }

  handleShowDetails = () => {
    if (this.state.showDetails === false){
      this.setState({ showDetails: true});    
    } else {
      this.setState({ showDetails: false});
    }
  };

    render() {
      const showDetails = this.state.showDetails;
      const { event } = this.props;
        return (
        <div className="event">
          <h3 className="summary">{event.summary}</h3>
          <p className="location">{event.location}</p>
          <p className="start-time">{event.dateTime}</p>
          {!showDetails && (
          <button className="details-button" onClick={this.handleShowDetails}>Show Details</button>
          )}
          {showDetails && (
            <button className="details-button" onClick={this.handleShowDetails}>Hide Details</button>
          )}
          {showDetails && (
            <div className="event-details">
              <p className="event-description">{event.description}</p>
              <p className="event-start">Begins: {event.start.date} / {event.start.dateTime}</p>
              <p className="event-end">Ends: {event.end.date} / {event.end.dateTime}</p>
              <p className="organizer-name">Organizer: {event.organizer.displayName}</p>
              <p className="organizer-contact">Contact: {event.organizer.email}</p>
            </div>
          )}
        </div>
        )
      };
}
export default Event;