import "./main.styles.css"
import LeftComponent from "./left-component/left-component.component"
import RightComponent from "./right-component/right-component.component"

const Main = ({listWeatherData, location, airQuality}) => { 
    return(
        <main>
            <article className="container fade-in">
                <LeftComponent listWeatherData={listWeatherData} location={location}/>
                <RightComponent listWeatherData={listWeatherData} airQuality={airQuality} location={location}/>
            </article>
        </main>
    )
}

export default Main