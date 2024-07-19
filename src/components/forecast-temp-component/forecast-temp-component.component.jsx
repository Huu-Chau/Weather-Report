const ForecastTempComponent = ({temp, icon, unix}) => {
    const date = new Date(unix * 1000)

    let hour = date.getHours()
    const period = hour >= 12 ? 'PM' : 'AM'

    hour = hour % 12 || 12

    const thisTime = `${hour} ${period}`

    return(
        <li className="slider-item">
            <div className="card card-sm slider-card">
                <p className="body-3">{thisTime}</p>
                <img src={`./weather_icons/${icon}.png`} 
                    width="48" height="48" 
                    loading="lazy" alt="${description}"   
                    className="weather-icon" title="${description}"
                />
                <p className="body-3">{parseInt(temp - 273.15)}&deg;C</p>
            </div>
        </li>
    )
} 

export default ForecastTempComponent