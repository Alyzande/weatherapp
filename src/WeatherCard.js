import React, { useEffect } from "react";
import './weathercard.css';

function WeatherCard() {

useEffect(() => {
    let response = fetch("url");

weatherInfo({
    weathersDate: "a date passed as a string",
    weathersImage: "image placeholder",
    degreeDisplay: "Number",
    weatherText: "long string",
    windInfo: "Another Number", 
}); 
}, []);




  return (
    <div className="WeatherCard">
      weathersDate, weathersImage, degreeDisplay, weatherText, windInfo
    </div>
  );
}

export default WeatherCard;
