import React, { useState } from "react";
import './weathercard.css';
import { ApiClient } from "./ApiClient";

function WeatherCard() {

const weatherInfo = useState({
  weathersDate: "a date passed as a string",
  weathersImage: "image placeholder",
  degreeDisplay: "Number",
  weatherText: "long string",
  windInfo: "Another Number",
});
const apiClient = new ApiClient();


const apistring ="https://api.openweathermap.org/data/3.0/onecall?lat=53.38&lon=-1.47&exclude=current,minutely,hourly,alerts&units=metric&appid=10f8ebf1d0c06f8e93882e24c19e88eb";

  return (
    <div className="WeatherCard">
      weathersDate, weathersImage, degreeDisplay, weatherText, windInfo
    </div>
  );
}

export default WeatherCard;
