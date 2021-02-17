import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import './App.css';



function App() {

  const [weatherInfo, setWeatherInfo] = useState(null);
  const inputRef = useRef(null);  

  const fetchWeatherInfo = (e) => {
    e && e.preventDefault();
    
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: {
        q: inputRef.current.value,
        units: 'metric',
      },
      headers: {
        'x-rapidapi-key': '14e74a0348msh51303d8b22d40ddp1d4fb4jsnebe22e91fcf0',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
      }
    };
    axios.request(options).then((response) => {
      console.log("FECHED INFO")
      setWeatherInfo(response.data);      
    }).catch((error) => {
      console.error(error);
    });    
  }

  useEffect(() => {
    fetchWeatherInfo();
  }, [])

  console.log(weatherInfo);

  return (
    <div className="App">
      <h1>Hello</h1>
      <form>
        <input ref={inputRef} type="text" placeholder="Type the name of the city" />
        <button type="submit" onClick={fetchWeatherInfo}>Search</button>
      </form>
      <h2>{weatherInfo?.name}</h2>
    </div>
  );
}

export default App;
