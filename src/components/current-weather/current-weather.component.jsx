import "./current-weather.styles.css"
import Weapper from "./weapper/weapper.component"
import MetaItem from "../meta-item/meta-item.component"
import React from "react"

const CurrentWeather = ({temp, icon, description, curLocation}) => {
    const option = {
        weekday:'long',
        month:'short',
        day:'numeric'
    }
    //the undefiend is language code table, option is extracting the component needed from Mon Jan 10 2024 10:10:10 GMT+0700 (Indochina Time)
    const formattedDate = new Date().toLocaleDateString(undefined, option)

    return(
        <section className="section current-weather" aria-label="current weather" >
            <div className="card card-lg current-weather-card">
                <h2 className="title-2 card-title">Now</h2>
                <Weapper temp={temp} icon={icon} description={description}/>
                <p className="body-3">{description}</p>
                <ul className="meta-list">
                    <MetaItem iconName={"calendar_today"} temp={temp} display={formattedDate}/>
                    <MetaItem iconName={"location_on"} display={curLocation}/>
                </ul>
            </div>
        </section>
    )
} 

export default CurrentWeather