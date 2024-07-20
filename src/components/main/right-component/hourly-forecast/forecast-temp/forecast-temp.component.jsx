import ForecastTempComponent from "./forecast-temp-component/forecast-temp-component.component"

const ForecastTemp = ({currentWeatherData}) => {
    return(
        <ul className="slider-list">
            {currentWeatherData.map((tempData) => {
                const keyValue = tempData.dt 
                const tempValue = tempData.main.temp
                const iconValue = tempData.weather[0].icon
                return(
                    <ForecastTempComponent key={keyValue} temp={tempValue} icon={iconValue} unix={keyValue}/>
                )
            })}
        </ul>
    )
} 

export default ForecastTemp