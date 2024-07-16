import './App.css';
import { useState, useEffect } from 'react';
import Header from "./components/header/header.component"
import Main from "./components/main/main.component"

function App() {
  const [weatherData, setweatherData] = useState([])
  const api_Key = process.env.REACT_APP_API_KEY
  const [cityName, setcityName] = useState('Tây Ninh') 
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},vn&APPID=${api_Key}`)
    .then((data) => data.json())
    .then((jsonData) => setweatherData(jsonData))
  }, {weatherData})

  const cityHandler = (city) => {
    setcityName(city.target.value)
  }

  console.log(weatherData.coord.lat)
 
  return (
    <div>
      <Header oncityHandler={cityHandler}/>
      <Main weather={weatherData}/>   
    </div>
  );
}

export default App;
