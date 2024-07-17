import ForecastCardList from "../forecast-card-list/forecast-card-list.component"
import "./forecast.styles.css"


const Forecast = ({curWeatherData}) => {
    return(
        <section className="section forecast" aria-label="forecast-label" >
            <h2 className="title-2" id="forecast-label">5 Days Forecast</h2>
            <ForecastCardList curWeatherData={curWeatherData}/>
        </section>
    )
} 

export default Forecast