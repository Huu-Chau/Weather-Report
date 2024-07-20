import ForecastCard from "./forecast-card/forecast-card.component"

const ForecastCardList = ({furuteWeatherData}) => {
    if (!Array.isArray(furuteWeatherData)) {
        return (
            <div className="loading" data-loading></div>
        );
    }

    return(
        <div className="card card-lg forecast-card">
            <ul>
                {furuteWeatherData.map((futureData) => (
                    <ForecastCard 
                        icon={futureData.weather[0].icon} 
                        description={futureData.weather[0].description} 
                        temp={futureData.main.temp_max} 
                        key={futureData.dt}
                        unix={futureData.dt}
                    />
                ))}
            </ul>
      </div>
    )
}

export default ForecastCardList