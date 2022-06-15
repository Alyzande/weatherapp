import React from "react";
import './weathercard.css';
import Moment from 'react-moment';
import 'moment-timezone';


function WeatherCard(props) {
  const degreeRounded =  Math.round(props.degreeDisplay, 1);
  const dateParsed = (props.weathersDate * 1000);
  const windSpeed = Math.round(props.windInfo, 1);
  const weatherImgSrc = "http://openweathermap.org/img/wn/" + (props.weathersImage) + "@2x.png";

  return (
    <div className="WeatherCard">
      <span id="datespan">
      <Moment format="ddd D">{dateParsed}</Moment>
      </span>
      <img src={weatherImgSrc} alt={props.weatherText} />
      <span id="degreedisplay">
      {degreeRounded}°C
      </span>
      <span id="weathertext">PH{props.weatherText}. </span>  
       Wind:<span id="windspeed">{windSpeed}</span>m/s
    </div>
  );
}

export default WeatherCard;
