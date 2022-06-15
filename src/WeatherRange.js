import React from "react";
import './weatherrange.css';
import Moment from 'react-moment';
import 'moment-timezone';


function WeatherRange(props) {

  const dateToday = (props.weathersDate * 1000);
 
  return (
    <div className="WeatherRange">
      <Moment format="ddd D">{dateToday}</Moment>
    </div>
  );
}

export default WeatherRange;