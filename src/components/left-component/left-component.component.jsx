import "./left-component.styles.css"
import CurrentWeather from "../current-weather/current-weather.component"
import Forecast from "../forecast/forecast.component"

const LeftComponent = () => {
    return(
        <div className="content-left">
            <CurrentWeather className="section current-weather" aria-label="current weather"/>
            <Forecast className="section forecast" aria-labelledby="forecast-label"/>
        </div>
    )
}

export default LeftComponent