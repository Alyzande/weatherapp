import React from "react";
import './weathercard.css';
import Moment from 'react-moment';
import 'moment-timezone';


function WeatherCard(props) {


  return (
    
    <div className="WeatherCard">
      <span id="datespan">
      <Moment format="D MMM">
        {props.weathersDate} 
      </Moment>
      </span>
      {props.weathersImage} 
      <span id="degreedisplay">
      {props.degreeDisplay}°C
      </span>
      <span>{props.weatherText} </span>  
       Wind Speed <span id="windspeed">{props.windInfo}mph</span>
    </div>
  );
}

export default WeatherCard;
