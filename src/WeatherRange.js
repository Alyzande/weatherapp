import React from "react";
import './weatherrange.css';
import Moment from 'react-moment';
import 'moment-timezone';


function WeatherRange(props) {
  const dateToday = (props.weathersDate * 1000);
 
  return (
    <div className="WeatherRange">
        Weather forecast for&nbsp;
      <Moment format="dddd Do MMMM YYYY">{dateToday}</Moment>
      
    </div>
  );
}

export default WeatherRange;