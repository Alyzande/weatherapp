import './App.css';
import WeatherCard from './WeatherCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import Logo from './logo.png';
import { ApiClient } from "./ApiClient";
import React, {useState, useEffect} from 'react';



function App() {


  const [weatherInfo, updateWeatherDisplay] = useState([{
    
    dt: "1646318698",
    weather: {
      icon: "image PH1", 
      description: "some text appears here"},
    temp: {
      day: 1},
    wind_speed: 2
  
  }, 
  {
    
    dt: "1646318697",
    weather: {
      icon: "image PH2", 
      description: "some text appears here again"},
    temp: {
      day: 1},
    wind_speed: 2
  
  }]);
  
  const apiClient = new ApiClient();
  
  const updateWeather =() =>{
  
      apiClient.getWeather()
        //console.log(getWeather)
        .then((jsonResponse) =>{
        //console.log("response", jsonResponse.data);
        updateWeatherDisplay(jsonResponse.data.daily);
  
      })
      .catch((error) => {
        console.log (error);
      })
  
  }
  useEffect(() =>{
    //stuff
    updateWeather();
  },[])
  
const buildDivs = () =>{
  //console.log(weatherInfo)
  return weatherInfo.map((weatherRow) => {

    //console.log("this is weather row" + weatherRow.dt)
    return (
      <WeatherCard     
      key={weatherRow.dt}
      weathersDate={weatherRow.dt}
      weathersImage={weatherRow.weather.icon}
      degreeDisplay={weatherRow.temp.day}
      weatherText={weatherRow.weather.description}
      windInfo={weatherRow.wind_speed}
      
      />

    )


  })
}


  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
      Weather App
      </Navbar.Brand>
    </Container>
  </Navbar>
  <br />
    <Container>
            Weather for date range: weatherRange
      <Row >
      <Col sm={8}>
 
      {buildDivs()}
      

       </Col> 
       <Col sm={4}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</Col>    
      </Row>

    </Container>
    
    </div>
  );
}

export default App;
