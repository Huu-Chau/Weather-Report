import "./right-component.styles.css"
import Hightlight from "../hightlight/hightlight.component"
import HourlyForecast from "../hourly-forecast/hourly-forecast.component"

const RightComponent = () => {
    return(
        <div className="content-right">
            <Hightlight/>
            <HourlyForecast/>
        </div>
    )
}

export default RightComponent