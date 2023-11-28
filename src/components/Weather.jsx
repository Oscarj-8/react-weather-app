import { useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";
import axios from "axios";
import cloudy from "../images/cloudy.png";
import WeatherCard from "./WeatherCard";
import DateDisplay from "./DateDisplay";

function Weather() {
  const majorCities = [
    "New York",
    "London",
    "Tokyo",
    "Dubai",
    "Beijing",
    "Paris",
    "Moscow",
    "Sydney",
    "Delhi",
    "Cairo",
  ];

  const [majorCitiesWeather, setMajorCitiesWeather] = useState([]);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const FetchMajorCitiesWeather = async () => {
      const promises = majorCities.map((city) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

        return fetch(url).then((res) => res.json());
      });
      const results = await Promise.all(promises);
      setMajorCitiesWeather(results);
    };
    FetchMajorCitiesWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );

      const iconCode = response.data.weather[0].icon;

      const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

      setWeather({ ...response.data, iconUrl });
      setError(null);
    } catch (err) {
      setWeather(null);
      setError("City is not found");
    }
  };

  return (
    <div className="container">
      <div>
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
      </div>

      {weather && (
        <div className="wrapper">
          <img src={weather.iconUrl} alt="" />
          <p>
            <span>City, Country:</span> {weather.name}, {weather.sys.country}
          </p>
          <p>
            <span>Weather Desription:</span> {weather.weather[0].description}
          </p>
          <p>
            <DateDisplay timestamp={weather.dt} />
          </p>
          <p>
            <span>
              <Icon name="thermometer" />
              Temprature:
            </span>
            {weather.main.temp - 273.15} &deg;C
          </p>
        </div>
      )}
      {error && <p>{error}</p>}
      <div className="major-cities-container">
        {majorCitiesWeather.map((data) => (
          <WeatherCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}
export default Weather;
