const ForecastCard = ({icon, description, temp, unix}) => {
    const options = {
        weekday:'long',
        month:'short',
        day:'numeric'
    }
    const milisecondUnix = unix * 1000
    const date = new Date(milisecondUnix)
    
    //the undefiend is language code table, options is extracting the component needed from Mon Jan 10 2024 10:10:10 GMT+0700 (Indochina Time)
    // and milisecondUnix is the dt value which is seconds since January 1, 1970, UTC and need to convert to miliseconds
    const formattedDay = date.toLocaleDateString(undefined, {weekday: options.weekday})
    const formattedDate = date.toLocaleDateString(undefined, {day: options.day, month: options.month})
    
    return(
        <li className="card-item">
            <div className="icon-wrapper">
                <img
                    src={`./weather_icons/${icon}.png`}
                    width="36"
                    height="36"
                    alt={`${description}`}
                    className="weather-icon"
                    title={description}
                />
                <span className="span">
                    <p className="title-2">{parseInt(temp - 273.15)}&deg;<sub>C</sub></p>
                </span>
                <p className="label-1">{formattedDate}</p> 
                <p className="label-1">{formattedDay}</p>
            </div>
        </li>
    )
}

export default ForecastCard