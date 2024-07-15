import './App.css';
import { useState, useEffect } from 'react';
import Header from "./components/header/header.component"
import Main from "./components/main/main.component"


function App() {
  const [weatherData, setweatherData] = useState([])
  // const api_key = "191b6752dc4cb3908988a414839dc067"
  const [cityName, setcityName] = useState('Tây Ninh') 
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},vn&APPID=${api_key}`)
    .then((data) => data.json())
    .then((jsonData) => setweatherData(jsonData))
  })

  const cityHandler = (city) => {
    setcityName(city.target.value)
  }

  return (
    <div>
      <Header oncityHandler={cityHandler}/>
      <Main weather={weatherData}/>   
    </div>
  );
}

export default App;
