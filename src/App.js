import './App.css';
import WeatherCard from './WeatherCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import Logo from './logo.png';
import { ApiClient } from "./ApiClient";
import React, {useState, useEffect} from 'react';
import WeatherRange from './WeatherRange';
import Map from './map.jpg';



function App() {

const [coords, changeCoords] = useState ({
  lat: 53.383331,
  lon: -1.466667
})

  const [weatherInfo, updateWeatherDisplay] = useState([{
    dt: 1655294401,
    weather: {
      icon: "image PH1", 
      main: "weatherdescPH1"},
    temp: {
      day: 1},
    wind_speed: 2
  }, 
  {
    dt: 1655294400,
    weather: {
      icon: "image PH2", 
      main: "weatherdescPH2"},
    temp: {
      day: 1},
    wind_speed: 2
  }]);
  
  const apiClient = new ApiClient();
  
  const updateWeather =() =>{
      apiClient.getWeather(coords.lat, coords.lon)
         .then((jsonResponse) =>{
        updateWeatherDisplay(jsonResponse.data.daily);
      })
      .catch((error) => {
        console.log (error);
      })
  }

  useEffect(() =>{
    updateWeather();
  },[])
  
  useEffect(() =>{
    updateWeather();
  },[coords])

const buildDivs = () =>{
  return weatherInfo.slice(0, 7).map((weatherRow) => {
    //console.log("this is weather row" + weatherRow.weather.icon)
    return (
      <WeatherCard     
      key={weatherRow.dt}
      weathersDate={weatherRow.dt}
      weathersImage={weatherRow.weather.length ? weatherRow.weather[0].icon:""}
      degreeDisplay={weatherRow.temp.day}
      weatherText={weatherRow.weather.length ? weatherRow.weather[0].main: ""}
      windInfo={weatherRow.wind_speed}
      />
    )
  })
}

const buildWeatherRange = () =>{
  return weatherInfo.slice(0, 1).map((weatherStartDate) => {
    return (
      <WeatherRange     
      key={weatherStartDate.dt}
      weathersDate={weatherStartDate.dt} 
      />
    )})
}

const sheffield = {
  lat: 53.383331,
  lon: -1.466667
}
const london = {
  lat: 51.509865,
  lon: -0.118092
}

const edinburgh = {
  lat: 55.953251,
  lon: -3.188267
}

const cardiff = {
  lat: 51.481583,
  lon: -3.179090
}

const handleLocation = (e) => {
  //do stuff with location
  if (e.target.value === "london") {
      changeCoords(london)
  } else if (e.target.value === "edinburgh") {
      changeCoords(edinburgh)
  } else if (e.target.value === "cardiff") {
      changeCoords(cardiff)
  } else if (e.target.value === "sheffield") {
      changeCoords(sheffield)
  }

}


  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt="Daily Weather app sun and cloud logo"
          src={Logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
      Weather App 2022
      </Navbar.Brand><select name="location" id="location" onChange={(e) =>
      handleLocation(e)}>
  <option value="sheffield">Sheffield</option>
  <option value="london">London</option>
  <option value="edinburgh">Edinburgh</option>
  <option value="cardiff">Cardiff</option>

</select>
    </Container>
  </Navbar>
  <br />
    <Container className="bob">
            {buildWeatherRange()}

      <Row >
      <Col sm={8}>
 
      {buildDivs()}
    
      

       </Col> 
       <Col sm={4}>
       <img
          alt="Map of UK"
          src={Map}
          width="100%"
          className="rounded"
        />
        <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
        </Col>    
      </Row>

    </Container>
    
    </div>
  );
}

export default App;
