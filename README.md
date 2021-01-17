Social Eyes
A serverless application for searching events according to city. The app uses the Google Calendar API to fetch upcoming events.

FEATURE 1: FILTER EVENTS BY CITY
As a user
I should be able to search for a specific city
So that I can see events for that city

    Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
    Given User
    When the user has not searched for a city
    Then app displays a list of upcoming events for all cities.

    Scenario 2: User should see a list of suggestions when they search for a city.
    Given search bar 
    When user types in the search bar
    Then a list of suggestions is show to the user

    Scenario 3: User can select a city from the suggested list.
    Given list of suggested cities
    When user selects a city
    Then list of events in that city are displayed

FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS
As a user 
I should be able to show or hide specific events details
So that I can decide which event to view details while being able to view many events

    Scenario 1: An event element is collapsed by default
    Given a selected city
    When user has not selected an event
    Then each event is displayed collapsed

    Scenario 2: User can expand an event to see its details
    Given a list of events for a city
    When user selects a specific event
    Then the event will expand to share more detailed information

    Scenario 3: User can collapse an event to hide its details
    Given an expanded view of an event
    When user selects collapse
    Then event will hide the listed details as originally listed


FEATURE 3: SPECIFY NUMBER OF EVENTS
As a user
I should be able to increase or decrease the number of events listed in my view
So that I can have control over the display of feedback from my search

    Scenario 1: When user hasn’t specified a number, 32 is the default number
    Given list of events by city	
    When user has not specified a number
    Then display will list 32 events by default

    Scenario 2: User can change the number of events they want to see
    Given list of events by city
    When user changes preferred number of events
    Then list number will reflect user’s selected display number

FEATURE 4: USE THE APP WHEN OFFLINE
As a user
I should be able to view event I previously viewed when I am offline
So that I can review my search results even if i have no connection

    Scenario 1: Show cached data when there’s no internet connection
    Given no internet connection
    When user views app
    Then app will display cached data

    Scenario 2: Show error when user changes the settings (city, time range)
    Given no internet connection
    When user attempts to change city or time range
    Then an error message will display

FEATURE 5: DATA VISUALIZATION
As a user
I should be able to view a chart of event data according to city
So that I can analyze the kind of events going on in the city of my choice. 

    Scenario 1: Show a chart with the number of upcoming events in each city
    Given a city and date range
    When user selects data visualization
    Then chart of upcoming events in the city will display


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
