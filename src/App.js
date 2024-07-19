import './App.css';
import './styles.css';
import { useState, useEffect } from 'react';
import Header from "./components/header/header.component"
import Main from "./components/main/main.component"

function App() {
  const [location, setlocation] = useState({})
  const [weatherData, setweatherData] = useState(null)
  const [listWeatherData, setlistWeatherData] = useState({list:[]})
  const [airQuality, setairQuality] = useState(null)
  const [cityName, setcityName] = useState('Tay Ninh') 
  const api_Key = process.env.REACT_APP_API_KEY
  // changing api key require refreshing the vscode for the .env to work, and need to wait for a while in order for the api_Key to be valid
  const cityHandler = (city) => {
    setcityName(city.target.value)
  }

  // get the coord from the e.target.value
  const fetchCityCoord = async () => {
    try {
      const coordFetch = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${api_Key}`)
      const [dataJson] = await coordFetch.json()
      const {lat, lon, name, country} = dataJson
      setlocation({name: name, country: country}) 
      return [lat, lon]
    } catch (error) {
      console.error("error fetching coordinates", error)
    }
  }
  // get the weather data from the lat and lon given from fetchCityCoord()
  const fetchDataWeather = async (lat, lon) => {
    try {
      console.log("Fetching data...")
      const dataFetch = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_Key}`)
      const dataJson = await dataFetch.json()
      setweatherData(dataJson)
      setlocation(prevState => ({...prevState, cityTime: dataJson.city}))
      console.log("fetch sucess!")
    } catch (err) {
      console.error("Error fetching data:", err)
    }
  }
  // Same as above, but air quality data
  const fetchAirQuality = async (lat, lon) => {
    try {
      console.log("Fetching air quality...")
      const dataFetch = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api_Key}`)  
      const dataJson = await dataFetch.json()
      const [air_pollution] = dataJson.list   
      setairQuality(air_pollution)
      console.log("fetch sucess!")
    } catch (error) {
      console.error("Error fetching data:", error)
    }  
  }
  // an async function to return the object state 
  const weatherHandler = async () => {
    const [lat, lon] = await fetchCityCoord()
    if(lat && lon){
      await fetchDataWeather(lat, lon)
      await fetchAirQuality(lat, lon) 
    }
  }

  // run the function in Effect hook with city dependancies
  useEffect(() => {
    weatherHandler()
    console.log(airQuality) 
  }, [cityName])
  // run the next useEffect after fetching the data to set the data
  useEffect(() => {
    if (weatherData) {
      setlistWeatherData(weatherData.list)
    }
  }, [weatherData])

  return (
    <div>
      <Header oncityHandler={cityHandler}/>
      <Main listWeatherData={listWeatherData} location={location} airQuality={airQuality}/>
    </div>
  );
}

export default App;
