import React, { useState } from "react";
import axios from "axios";
import "./HomeScreen.css";
import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet';
import "leaflet/dist/leaflet.css";

function HomeScreen() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [latitude,setLatitude] = useState(19.0144)
  const [longitude,setLongitude] = useState(72.8479)

  const ZOOM_LEVEL = 10;
  // console.log(`lat ${latitude}`);
  // console.log(`long ${longitude}`)

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=64a7dc984ba0d1453a2cedb01301f39d`;

  const attribution ='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  const mapTilerUrl = 'https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=3hwJsCotYsQ8PRjYwwbw'

  const searchLocation = (event) => { 
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        setLatitude(response.data.coord.lat)
        setLongitude(response.data.coord.lon)
       
        
      });   

     
      // axios.get(mapUrl).then((response) => {
      //   setLatitude(response.data[0].lat);
      //   setLongitude(response.data[0].long);
      //   console.log(response.data[0]);
      // });

    }
    
  };


  // var map = L.map('map').setView([lat,long], 13);

  // L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=3hwJsCotYsQ8PRjYwwbw',{
  //   attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  // }).addTo(map)
  
  // var marker = L.marker([lat,long]).addTo(map)
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

        <div className="bottom d-flex justify-content-evenly text-center rounded">
          
              <div className="feels box">
                {data.main ? (
                  <p>
                    {" "}
                    Feels Like<h1>{data.main.feels_like.toFixed()}°C </h1>
                  </p>
                ) : null}
              </div>
              <div className="temp-min box">
                {data.main ? (
                  <p>
                    Min Temp<h1>{data.main.temp_min.toFixed()}°C </h1>
                  </p>
                ) : null}
              </div>
              <div className="temp-max box">
                {data.main ? (
                  <p>
                    Max Temp<h1>{data.main.temp_max.toFixed()}°C </h1>
                  </p>
                ) : null}
              </div>
        </div>
          <br />
       <div className=" bottom3 d-flex justify-content-evenly text-center rounded">
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
            <div className="wind box">
              {data.main ? (
                <p>
                  Wind Angle<h1>{data.wind.deg}°</h1>
                </p>
              ) : null}
            </div>
        </div>
        {data.main ? (
            <MapContainer
              className='leaflet-container my-5'
              center={[latitude,longitude]}
              zoom ={ZOOM_LEVEL}
            >
              <TileLayer url={mapTilerUrl} attribution={attribution}/>
              <Marker position={[latitude,longitude]}>
                <Popup>
                  {location}
                </Popup>
              </Marker>
            </MapContainer>
          ) : null}
            
      </div>
    </>
  );
}

export default HomeScreen;
