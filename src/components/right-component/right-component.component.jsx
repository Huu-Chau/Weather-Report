import "./right-component.styles.css"
import Highlights from "../highlights/highlights.component"
import HourlyForecast from "../hourly-forecast/hourly-forecast.component"
import Loading from "../loading/loading.component"

const RightComponent = ({listWeatherData, airQuality, location}) => {
    if (!listWeatherData || !Array.isArray(listWeatherData) || !listWeatherData[0].main || !location) {
        return <Loading />;
    }
    const { main, visibility } = listWeatherData[0];
    const {sunrise, sunset, timezone } = location.cityTime || {}  
    const {humidity, pressure, feels_like } = main
    // you can call an object var to have all the props from 18 to 25
    const currentWeatherData = listWeatherData.filter((_,index) => index < 8)
    return(
        <div className="content-right">
            <Highlights 
                airQuality={airQuality} 
                sunrise={sunrise}
                sunset={sunset}
                timezone={timezone}
                humidity={humidity}
                pressure={pressure}
                feels_like={feels_like}
                visibility={visibility}
            />
            <HourlyForecast currentWeatherData={currentWeatherData}/>
        </div>
    )
}

export default RightComponent