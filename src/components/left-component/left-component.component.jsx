import "./left-component.styles.css"
import CurrentWeather from "../current-weather/current-weather.component"
import Forecast from "../forecast/forecast.component"
import Loading from "../loading/loading.component"

const LeftComponent = ({curWeatherData, location}) => {
    if (!curWeatherData && !curWeatherData.main && !curWeatherData.weather && curWeatherData.length === 0) {
        return <Loading/>
    }
        const { main, weather } = curWeatherData[0];
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
            <Forecast curWeatherData={curWeatherData}/>
        </div>
    )
}

export default LeftComponent