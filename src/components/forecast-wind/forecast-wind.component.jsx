import ForecastWindComponent from "../forecast-wind-component/forecast-wind-component.component"

const ForecastWind = ({currentWeatherData}) => {
    return(
        <ul class="slider-list">
            {currentWeatherData.map((tempData) => {
                const keyValue = tempData.dt 
                const {speed, deg} = tempData.wind
                return(
                    <ForecastWindComponent key={keyValue} speed={speed} degree={deg} unix={keyValue}/>
                )
            })}
        </ul>
    )
} 

export default ForecastWind