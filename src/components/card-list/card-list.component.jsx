import CardItem from "../card-item/card-item.component"

const CardList = ({airQuality}) => {
    const {pm2_5, so2, no2, o3} = airQuality.components
    return(
        <ul className="card-list">
            <CardItem prop={pm2_5} name="pm2_5"/> 
            <CardItem prop={so2} name="so2"/>
            <CardItem prop={no2} name="no2"/>
            <CardItem prop={o3} name="o3"/>
        </ul>
    )
}

export default CardList