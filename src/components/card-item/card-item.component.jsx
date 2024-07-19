import AirQualityName from "../air-quality-name/air-quality-name.component"

const CardItem = ({prop, name}) => {
    return(
        <li className="card-item">
            <p className="title-1">{prop}</p>
            <AirQualityName name={name}/>
        </li>
    )
} 

export default CardItem