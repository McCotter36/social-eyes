import { mockData } from './mock-data';
import axios from 'axios';
import NProgress from 'nprogress';

const extractLocations = (events) => {
  var extractLocations = events.map((event) => event.location);
  var locations = [...new Set(extractLocations)];
  return locations;
};

const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error.json());

  return result.error ? false : true;
};

// const checkToken = async (accessToken) => {
//   try{
//     const response = await axios(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`);
//     return true;
//   }catch(e){
//     return false
//   }
// }

const getEvents = async () => {
  NProgress.start();

  if (
    !navigator.onLine &&
    !window.location.href.startsWith("http://localhost")
  ) {
    const events = localStorage.getItem("lastEvents");
    NProgress.done();
    return JSON.parse(events).events;
  }

  if (window.location.href.startsWith("http://localhost")) {
    NProgress.done();
    return mockData;
  }

  const token = await getAccessToken();

  if (token) {
    removeQuery();
    const url = 'https://8cck9ad2v0.execute-api.us-east-2.amazonaws.com/dev/api/get-events/' + token;
    const result = await axios.get(url);
    if (result.data) {
      let locations = extractLocations(result.data.events);
      localStorage.setItem("lastEvents", JSON.stringify(result.data));
      localStorage.setItem("locations", JSON.stringify(locations));
    }
    NProgress.done();
    return result.data.events;
  }
};


const getAccessToken = async () => {
  const accessToken = await
  localStorage.getItem('access_token');
  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || !tokenCheck) {
    await localStorage.removeItem("access_token");
    const searchParams = new 
    URLSearchParams(window.location.search);
    const code = await searchParams.get("code");
    if (!code) {
      const results = await axios.get(
        "https://8cck9ad2v0.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url"
      );
      const { authUrl } = results.data;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
};

const removeQuery = () => {
    if (window.history.pushState &&
  window.location.pathname) {
      var newurl =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname;
      window.history.pushState("", "", newurl);
    } else {
      newurl = window.location.protocol + "//" +
  window.location.host;
      window.history.pushState("", "", newurl);
    }
  };

const getToken = async (code) => {
  removeQuery();
  const encodeCode = encodeURIComponent(code);
  const { access_token } = await fetch(
    `https://8cck9ad2v0.execute-api.us-east-2.amazonaws.com/dev/api/token/${encodeCode}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => error);

  access_token && localStorage.setItem("access_token", access_token);

  return access_token;
};

export { getEvents, getAccessToken, extractLocations, getToken, checkToken  };
