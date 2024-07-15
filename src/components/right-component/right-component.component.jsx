import "./right-component.styles.css"
import Hightlight from "../hightlight/hightlight.component"
import HourlyForecast from "../hourly-forecast/hourly-forecast.component"

const RightComponent = () => {
    return(
        <div>
            <Hightlight className="section highlights" aria-labelledby="highlights-label"/>
            <HourlyForecast className="section hourly-forecast" aria-label="hourly forecast"/>
        </div>
    )
}

export default RightComponent