import CardList from "../card-list/card-list.component"

const AirQuality = ({airQuality, aqiValue}) => {
    const {aqi} = aqiValue 
    function aqiTextHandler(level) {
        switch (level) {
            case 1:
                return 'Good'
            case 2:
                return 'Fair'
            case 3:
                return 'Moderate'
            case 4:
                return 'Poor'
            case 5:
                return 'Very poor'
            default:
                return 'Unknown AQI value';
        }
    }
    const aqiText = aqiTextHandler(aqi)
    return(
        <div className="card card-sm highlight-card one">
            <h3 className="title-3">Air Quality Index</h3>
            <div className="wrapper">
                <span className="m-icon">air</span>   
                <CardList airQuality={airQuality}/>
            </div>   
            <span className={`badge aqi-${aqi} label-${aqi}`}>{aqiText}</span>
        </div>
    )
} 

export default AirQuality