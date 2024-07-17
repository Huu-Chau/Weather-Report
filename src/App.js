import './App.css';
import './styles.css';
import { useState, useEffect } from 'react';
import Header from "./components/header/header.component"
import Main from "./components/main/main.component"

function App() {
  const [weatherData, setweatherData] = useState([])
  const [curWeatherData, setcurWeatherData] = useState({list:[]})
  const [location, setlocation] = useState({city:{}})
  const [cityName, setcityName] = useState('Tay Ninh') 
  const api_Key = process.env.REACT_APP_API_KEY
  // changing api key require refreshing the vscode for the .env to work, and need to wait for a while in order for the api_Key to be valid
  const cityHandler = (city) => {
    setcityName(city.target.value)
  }

  const fetchCityCoord = async () => {
    try {
      console.log("Fetching coordinates...")
      const coordFetch = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${api_Key}`)
      console.log("fetch sucess!")
      const dataJson = await coordFetch.json()
      return [dataJson[0].lat, dataJson[0].lon]
    } catch (error) {
      console.error("error fetching coordinates", error)
    }
  }

  const fetchDataWeather = async (lat, lon) => {
    try {
      console.log("Fetching data...")
      const dataFetch = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_Key}`)
      console.log("fetch sucess!")
      const dataJson = await dataFetch.json()
      setweatherData(dataJson)
    } catch (err) {
      console.error("Error fetching data:", err)
    }
  }

  const weatherHandler = async () => {
    const [lat, lon] = await fetchCityCoord()
    await fetchDataWeather(lat, lon)
  }

  useEffect(() => {
    // only use promised based data fetching on small api call
    // Nope, he said async is superior
    weatherHandler()
  }, [cityName])

  useEffect(() => {
    if (weatherData) {
      setcurWeatherData(weatherData.list)
      setlocation(weatherData.city)
      console.log(location)
    }
  }, [weatherData])

  return (
    <div>
      <Header oncityHandler={cityHandler}/>
      <Main curWeatherData={curWeatherData} location={location}/>   
    </div>
  );
}

export default App;
