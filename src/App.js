import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 20,
    selectedLocation: "all",
  }

  updateEvents = (location, eventCount) => {
    const { selectedLocation, numberOfEvents } = this.state;
    if (location) {
    getEvents().then((events) => {
      const locationEvents = location === "all" ?
        events :
        events.filter((event) => event.location === location);
      const filteredEvents = locationEvents.slice(0, numberOfEvents);
      this.setState({
        events: filteredEvents,
        selectedLocation: location,
      });
    });
  } else {
    getEvents().then((events) => {
      const locationEvents = selectedLocation === "all" ?
        events :
        events.filter((event) => event.location === selectedLocation);
      const filteredEvents = locationEvents.slice(0, eventCount);
      this.setState({
        events: filteredEvents,
      });
    });
  }
};

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render () {
    return (
      <div className="App">
        <div className="Selections">
        <CitySearch className="CitySearch" locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents className="NumberOfEvents" numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        </div>
        <EventList className="EventList" events={this.state.events} />      
      </div>
    );
  }
}

export default App;
