import "./left-component.styles.css"
import CurrentWeather from "./current-weather/current-weather.component"
import Forecast from "./forecast/forecast.component"

const LeftComponent = ({listWeatherData, location}) => {
    if (!listWeatherData || !Array.isArray(listWeatherData) || listWeatherData.length === 0 || !listWeatherData[0].main || !listWeatherData[0].weather) {
        return (
            <div className="loading"></div>
        )
    }
        const { main, weather } = listWeatherData[0];
        const temp = main.temp;
        const { icon, description } = weather[0];
        const curLocation = `${location.name}, ${location.country}`
    return(
        <div className="content-left">
            <CurrentWeather 
                temp={temp} 
                icon={icon} 
                description={description} 
                curLocation={curLocation}
            />
            <Forecast listWeatherData={listWeatherData}/>
        </div>
    )
}

export default LeftComponent