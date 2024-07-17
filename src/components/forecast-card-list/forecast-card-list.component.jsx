import ForecastCard from "../forecast-card/forecast-card.component"

const ForecastCardList = ({curWeatherData}) => {
    return(
        <div class="card card-lg forecast-card">
            <ul>
                {data.map(() => (
                    
                    <ForecastCard temp={data[0]} icon={data[1]} description={data[2]}/>
                ))}    
            </ul>
      </div>
    )
}

export default ForecastCardList