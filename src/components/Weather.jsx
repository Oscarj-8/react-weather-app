import { useState } from "react";
import axios from "axios";
import cloudy from "../../public/cloudy.png";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );

      setWeather(response.data);
      setError(null);
    } catch (err) {
      setWeather(null);
      setError("City is not found");
    }
  };

  return (
    <div className="container">
      <div className="top-section">
        <img src={cloudy} alt="Weather image" />
        <h1>Weather App</h1>
      </div>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Get Weather</button>
      </div>

      {weather && (
        <div className="wrapper">
          <p>
            <span>City, Country:</span> {weather.name}, {weather.sys.country}
          </p>

          <p>
            <span>Weather Desription:</span> {weather.weather[0].description}
          </p>
          <p>
            <span>Temprature:</span> {weather.main.temp} &deg;C{" "}
          </p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}
export default Weather;
