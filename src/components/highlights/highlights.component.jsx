import "./highlights.styles.css"
import AirQuality from "../air-quality/air-quality.component"
import SunriseSunset from "../sunrise-sunset/sunrise-sunset.component"
import WeatherStatus from "../weather-status/weather-status.component"

const Highlights = ({airQuality, sunrise, sunset, timezone, humidity, pressure, feels_like, visibility}) => {
    const aqiValue = airQuality.main
    return(
        <section className="section highlights" aria-labelledby="highlights-label">
            <div className="card card-lg">
                <h2 className="title-2" id="highlights-label">Today's Highlights</h2>
                <div className="highlight-list">
                    <AirQuality airQuality={airQuality} aqiValue={aqiValue}/>
                    <SunriseSunset sunrise={sunrise} sunset={sunset} timezone={timezone}/>
                    <WeatherStatus statusValue={humidity} name="Humidity"/>
                    <WeatherStatus statusValue={pressure} name="Pressure"/>
                    <WeatherStatus statusValue={visibility} name="Visibility"/>
                    <WeatherStatus statusValue={feels_like} name="Feels like"/>
                </div>
            </div>
        </section>
    )
} 

export default Highlights