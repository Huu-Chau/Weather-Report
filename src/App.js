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
  const [searchValue, setSearchValue] = useState('');
 
  const api_Key = process.env.REACT_APP_API_KEY
  const url_fetch = process.env.REACT_APP_URL_FETCH
  // changing api key require refreshing the vscode for the .env to work, and need to wait for a while in order for the api_Key to be valid
  const cityHandler = () => {
    if (searchValue == '') {
      console.error("You haven't put any city on the input");
    } else{
      setcityName(searchValue)
      console.log("Button Clicked!")
    }
  }

  // get the coord from the e.target.value
  const fetchCityCoord = async () => {
    try {
      const coordFetch = await fetch(`${url_fetch}/geo/1.0/direct?q=${cityName}&limit=1&appid=${api_Key}`)
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
      const dataFetch = await fetch(`${url_fetch}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_Key}`)
      const dataJson = await dataFetch.json()
      setweatherData(dataJson)
      console.log("weather data in fetchData: ", weatherData)
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
      const dataFetch = await fetch(`${url_fetch}/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api_Key}`)  
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
      console.log(lat)
      console.log(lon)
      console.log("search value:",searchValue)
    }
  }

  // run the function in Effect hook with city dependancies
  useEffect(() => {
    weatherHandler()
  }, [cityName])  
  // run the next useEffect after fetching the data to set the data
  useEffect(() => {
    if (weatherData) {
      setlistWeatherData(weatherData.list)
      console.log("weather data in useEffects:", weatherData)
      console.log("locations in useEffects:", location)
      console.log("list:", listWeatherData) 
      console.log("air quality", airQuality)
    }
  }, [weatherData])

  return (
    <div>
      <Header cityHandler={cityHandler} setSearchValue={setSearchValue}/>
      <Main listWeatherData={listWeatherData} location={location} airQuality={airQuality}/>
    </div>
  );
}

export default App;
