import "./left-component.styles.css"
import CurrentWeather from "../current-weather/current-weather.component"
import Forecast from "../forecast/forecast.component"

const LeftComponent = () => {
    return(
        <div className="content-left">
            <CurrentWeather/>
            <Forecast/>
        </div>
    )
}

export default LeftComponent