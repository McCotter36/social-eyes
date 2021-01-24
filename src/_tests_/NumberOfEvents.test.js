import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render NumberOfEvents Component', () => {
    expect(NumberOfEventsWrapper).toHaveLength(1);
  });

  test('render number of events div', () => {
    expect(NumberOfEventsWrapper.find(".number-of-events")).toHaveLength(1);
  });

  test('default number of events equals 32', () => {
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
  });

  test('render number of events label', () => {
    expect(NumberOfEventsWrapper.find(".number-of-events-label")).toHaveLength(1);
  });

  test('renders text input for number of events', () => {
    expect(NumberOfEventsWrapper.find(".number-input")).toHaveLength(1);
  });

  test('renders update button', () => {
    expect(NumberOfEventsWrapper.find(".update-button")).toHaveLength(1);
  });

  test('update number of events listed when clicked', () => {
    NumberOfEventsWrapper.setState({  
      numberOfEvents: 32, 
      });
      const inputNumber = { target : { value: "8" } };
      NumberOfEventsWrapper.find(".update-button").simulate("click", inputNumber); 
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe("8");

  })

});
