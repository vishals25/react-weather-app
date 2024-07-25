import React, { useEffect, useRef } from "react";
import "./Weather.css";
import search_icon from "../assets/search.png";
import clear from "../assets/clear.png";
import cloud from "../assets/cloud.png";
import humid from "../assets/humidity.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";
import drizzle from "../assets/drizzle.png";
import wind from "../assets/wind.png";
import haze from "../assets/Haze.png";

const Weather = () => {
  const inputRef = useRef();

  const [weatherData, setWeatherData] = React.useState(false);

  const allIcons = {
    Clear: clear,
    Clouds: cloud,
    Drizzle: drizzle,
    Rain: rain,
    Snow: snow,
    Haze: haze,
  };

  const search = async (city) => {
    if (city === "") {
      alert("Enter City Name!");
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }
      console.log(data);
      const icon = allIcons[data.weather[0].main] || clear;
      console.log(data.weather[0].main);
      setWeatherData({
        location: data.name,
        country: data.sys.country,
        temperature: Math.floor(data.main.temp),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("Error in Fetching data!");
    }
  };

  useEffect(() => {
    search("Chennai");
  }, []);

  return (
    <div className="weather">
      <div className="searchbar">
        <input ref={inputRef} type="text" placeholder="Search" />
        <img
          src={search_icon}
          alt=""
          id="search_icon"
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      {weatherData ? (
        <>
          <div className="weather-info">
            <img src={weatherData.icon} alt="" className="weather-icon" />
            <p className="temperature">{weatherData.temperature}°C</p>
            <p className="location">{weatherData.location}</p>
          </div>

          <div className="weather-data">
            <div className="col">
              <img src={humid} alt="" id="humid_icon" />
              <div>
                <p>{weatherData.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind} alt="" />
              <div>
                <p>{weatherData.windSpeed} kmph</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
