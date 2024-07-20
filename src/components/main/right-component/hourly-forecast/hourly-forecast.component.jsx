import "./hourly-forecast.styles.css"
import ForecastTemp from "./forecast-temp/forecast-temp.component"
import ForecastWind from "./forecast-wind/forecast-wind.component"

const HourlyForecast = ({currentWeatherData}) => {
    
    return( 
        <section className="section hourly-forecast" aria-label="hourly forecast">
            <h2 className="title-2">Today at</h2>
            <div className="slider-container">
                <ForecastTemp currentWeatherData={currentWeatherData}/>
                <ForecastWind currentWeatherData={currentWeatherData}/>
            </div>
        </section>
    )
} 

export default HourlyForecast