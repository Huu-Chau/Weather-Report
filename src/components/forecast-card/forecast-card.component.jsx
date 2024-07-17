const ForecastCard = ({temp, icon, description}) => {
    return(
        <li>
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
                    <p className="title-2">{parseInt(temp - 273.15)}&deg<sub>C</sub></p>
                </span>
            </div>
        </li>
    )
}

export default ForecastCard