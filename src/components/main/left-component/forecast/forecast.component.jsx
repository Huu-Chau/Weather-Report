import ForecastCardList from "./forecast-card-list/forecast-card-list.component"
// import "./forecast.styles.css"


const Forecast = ({listWeatherData}) => {
    if (!listWeatherData || !Array.isArray(listWeatherData) || listWeatherData.length === 0 || !listWeatherData[0].main || !listWeatherData[0].weather) {
        return (
            <div className="loading"></div>
        )
    }
    const furuteWeatherData = listWeatherData.filter((_,index) => (index + 1) % 8 == 0)
    return(
        <section className="section forecast" aria-label="forecast-label" >
            <h2 className="title-2" id="forecast-label">5 Days Forecast</h2>
            <ForecastCardList furuteWeatherData={furuteWeatherData}/>
        </section>  
    )
} 

export default Forecast