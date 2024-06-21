import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PrettyPrintJSON from './PrettyPrintJson';
import WeatherComponent from './WeatherComponent';

const request_details = {
  method: "GET",
  url: "https://yahoo-weather5.p.rapidapi.com/weather",
  params: {
    location: "mumbai",
    format: "json",
    u: "c",
  },
  headers: {
    "x-rapidapi-key": "2472b568b0msheb5626d99c70d2ap1d7d74jsn29ebe807a4bb",
    "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
  },
};

export default function WeatherDisplay() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    console.log("useEffect logic has been fired.");
    axios.request(request_details)
    .then(res => {
      console.log(res.data);
      setData(res.data);
      setLoading(false)
      console.log(res.data.current_observation.wind);
    })
    .catch(err => console.log("axios request error:", err));
  }, []);

  if (loading) {
    return <div>Loading weather data...</div>
  }
  else {
    return <div>
      <h3>Forecasts</h3>
      <table>
        <thead>
          <tr>
            <th>day</th>
            <th>high</th>
            <th>low</th>
            <th>prediction</th>
          </tr>
        </thead>
        <tbody>
          {data.forecasts.map((forecast) => {
            return (
              <tr key={forecast.date}>
                <td>{forecast.day}</td>
                <td>{forecast.high}</td>
                <td>{forecast.low}</td>
                <td>{forecast.text}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
      <div>
        <h3>Current Observation</h3>
        <WeatherComponent title={"Wind"} listData={data.current_observation.wind} />
        <WeatherComponent title={"Condition"} listData={data.current_observation.condition} />
        <WeatherComponent title={"Atmosphere"} listData={data.current_observation.atmosphere} />
        <WeatherComponent title={"Astronomy"} listData={data.current_observation.astronomy} />

      </div>

    </div>
  }

} 
