import "./main.styles.css"
import LeftComponent from "../left-component/left-component.component"
import RightComponent from "../right-component/right-component.component"
import Loading from "../loading/loading.component"

const Main = ({curWeatherData, location}) => {
    return(
        <main>
            <article className="container fade-in">
                <LeftComponent curWeatherData={curWeatherData} location={location}/>
                <RightComponent curWeatherData={curWeatherData}/>
                <Loading/>     
            </article>
        </main>
    )
}

export default Main