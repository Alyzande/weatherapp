import React, { useState } from "react";
import './weathercard.css';
import { ApiClient } from "./ApiClient";


function WeatherCard() {

const [weatherInfo, updateWeatherDisplay] = useState({
  weathersDate: "a date passed as a string",
  weathersImage: "image placeholder",
  degreeDisplay: 0,
  weatherText: "long string",
  windInfo: 0
});

const apiClient = new ApiClient();

apiClient.getWeather()
  //console.log(getWeather)
  .then((jsonResponse) =>{
  console.log("response", jsonResponse.data);
  //getWeather(jsonResponse.data);
})
.catch((error) => {
  console.log (error);
})

const updateWeather = (responseObject) => {
  updateWeatherDisplay({
    weathersDate: responseObject.weathersDate,
    weathersImage: responseObject.weathersImage,
    degreeDisplay: responseObject.degreeDisplay,
    weatherText: responseObject.weatherText,
    windInfo: responseObject.windInfo
  })
}


  return (
    <div className="WeatherCard">
      weathersDate, weathersImage, degreeDisplay, weatherText, windInfo
       {/* {current.weathersDate}
       {current.weather[i].icon}
        {current.weather[i].degreeDisplay}
         {current.weather[i].weatherText} 
         {current.weather[i].windInfo}  */}
    </div>
  );
}

export default WeatherCard;
