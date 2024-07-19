import WeatherStatusComponent from "../weather-status-component/weather-status-component.component"

const WeatherStatus = ({name, statusValue}) => {
    return(
        <div class="card card-sm highlight-card">
            <h3 class="title">{name}</h3>
            <WeatherStatusComponent name={name} statusValue={statusValue}/>  
        </div>  
    )
} 

export default WeatherStatus