import './App.css';
import './styles.css';
import { useState, useEffect } from 'react';
import Header from "./components/header/header.component"
import Main from "./components/main/main.component"

function App() {
  const [weatherData, setweatherData] = useState([])
  const api_Key = process.env.REACT_APP_API_KEY
  const [cityName, setcityName] = useState('Tây Ninh') 

  const fetchDataWeather = async () => {
    try {
      const dataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},vn&APPID=${api_Key}`)
      const dataJson = await dataFetch.json()
      setweatherData(dataJson)
    } catch (err) {
      console.error("Error fetching data:", err)
    }
  }

  useEffect(() => {
    // only use promised based data fetching on small api call
    // Nope, he said async is superior
    fetchDataWeather()
  }, [cityName,api_Key])

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
