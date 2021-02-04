import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';
import { getEvents, extractLocations } from './api';
import { OfflineAlert } from './Alert';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 20,
    selectedLocation: "all",
    alertText: "",
  }

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(' ').shift()
      return {city, number};
    })
    return data;
  };
  
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
    window.addEventListener("online", this.offlineAlert());
  }

  offlineAlert = () => {
    if (navigator.onLine === false) {
      this.setState({
        alertText: 
        "You are not connected to a network. Please connect to update the list of upcoming events."
      });
    } else {
      this.setState({ alertText: "" });
    }
  };

  componentWillUnmount(){
    this.mounted = false;
  }

  render () {
    return (
      <div className="App">
        <div className="Selections">
        <OfflineAlert className="alert" text={this.state.alertText} />
        <CitySearch className="CitySearch" locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents className="NumberOfEvents" numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        </div>
        <h4>Events in each city</h4>
      <div className="data-vis-wrapper">
        <EventGenre
        locations={this.state.locations}
        events={this.state.events} 
        />
      <ResponsiveContainer height={400} >
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city" />
          <YAxis
            allowDecimals={false}
            type="number"
            dataKey="number"
            name="number of events"
          />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter data={this.getData()} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
      </div>
        <EventList className="EventList" events={this.state.events} />      
      </div>
    );
  }
}

export default App;
