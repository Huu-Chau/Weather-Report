const ForecastWindComponent = ({speed, degree, unix}) => {
    const date = new Date(unix * 1000)

    let hour = date.getHours()
    const period = hour >= 12 ? 'PM' : 'AM'

    hour = hour % 12 || 12

    const thisTime = `${hour} ${period}`

    return(
        <li className="slider-item">
            <div className="card card-sm slider-card">
                <p className="body-3">{thisTime}</p>
                <img src={`./weather_icons/direction.png`}
                  width="48" height="48" 
                  loading="lazy" alt={`direction`}   
                  className="weather-icon" 
                  style = {{ transform: `rotate(${degree - 180}deg)`}}
                />
                <p className="body-3">{parseInt(speed * 3.6)} km/h</p>
            </div>
        </li>
    )
} 

export default ForecastWindComponent