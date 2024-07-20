import Loading from "../loading/loading.component";

const WeatherStatusComponent = ({name, statusValue}) => {
    switch (name) {
        case "Humidity":
            return(
                <div className="wrapper">
                    <span className="m-icon">humidity_percentage</span>
                    <p className="title-1">{statusValue}<sub>%</sub></p>
                </div>
            )
        case "Pressure":
            return(
                <div className="wrapper">
                    <span className="m-icon">airwave</span>
                    <p className="title-1">{statusValue}<sub>hPa</sub></p>
                  </div>
            )
        case "Visibility":
            return(
                <div className="wrapper">
                    <span className="m-icon">visibility</span>
                    <p className="title-1">{statusValue / 1000}<sub>km</sub></p>
                </div>
            )
        case "Feels like":
            return(
                <div className="wrapper">
                    <span className="m-icon">thermostat</span>
                    <p className="title-1">{parseInt(statusValue - 273.15)}&deg;<sub>C</sub></p>
                  </div>
            )
        default:
            return(
                <Loading/>
            )
    }

}

export default WeatherStatusComponent