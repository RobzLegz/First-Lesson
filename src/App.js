import axios from 'axios';
import React, { useEffect } from 'react';
import './App.css';

const options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  params: {
    q: 'London,uk',
    lat: '0',
    lon: '0',
    callback: 'test',
    id: '2172797',
    lang: 'null',
    units: '"metric" or "imperial"',
    mode: 'xml, html'
  },
  headers: {
    'x-rapidapi-key': '14e74a0348msh51303d8b22d40ddp1d4fb4jsnebe22e91fcf0',
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
  }
};

function App() {

  useEffect(() => {
    axios.request(options).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
