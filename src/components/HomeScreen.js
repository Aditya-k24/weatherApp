import React, { useState } from "react";
import axios from "axios";
import "./HomeScreen.css";

function HomeScreen() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=64a7dc984ba0d1453a2cedb01301f39d`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };
  return (
    <>
      <div className="container bkgImg">
        <div className="search">
          <input
            value={location}
            className="form-control my-5 text-center searchBar"
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter Location"
            type="text"
            onKeyDown={searchLocation}
          />
        </div>
        <div className="top text-center justify-content-center">
          {data.main ? (
            <div className="card temp">
              <div className="location my-2">
                <h5>{data.name}</h5>
              </div>

              <h1>{data.main.temp.toFixed()}°C </h1>
            </div>
          ) : null}
          <div className="desc">
            {data.weather ? (
              <p>
                <h5>{data.weather[0].main}</h5>
              </p>
            ) : null}
          </div>
        </div>

        <div className="d-flex justify-content-evenly text-center rounded">
          <div className="feels box">
            {data.main ? (
              <p>
                {" "}
                Feels Like<h1>{data.main.feels_like.toFixed()}°C </h1>
              </p>
            ) : null}
          </div>
          <div className="humidity box">
            {data.main ? (
              <p>
                Humidity<h1>{data.main.humidity}%</h1>
              </p>
            ) : null}
          </div>
          <div className="wind box">
            {data.wind ? (
              <p>
                Wind Speed<h1> {data.wind.speed.toFixed()} m/s</h1>{" "}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
