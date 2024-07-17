const Weapper = ({icon, description, temp}) => {
    return(
      <div className="weapper">
        <p className="heading">{parseInt(temp - 273.15)}&deg;<sub>C</sub></p>
        <img
          src={`./weather_icons/${icon}.png`}
          width="64"
          height="64"
          alt={`${description}`}
          className="weather-icon"/>
      </div>
    )
}

export default Weapper