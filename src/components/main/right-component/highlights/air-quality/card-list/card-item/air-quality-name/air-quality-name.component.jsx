const AirQualityName = ({name}) => {
    switch (name) {
        case "pm2_5":
            return( 
                <p className="label-1">PM<sub>2.5</sub></p>
            )
        case "so2":
            return(
                <p className="label-1">SO<sub>2</sub></p>
            )
        case "no2":
            return(
                <p className="label-1">NO<sub>2</sub></p>
            )
        case "o3":
            return(
                <p className="label-1">O<sub>3</sub></p>
            )
        default:
            return (
                <p className="label-1">O<sub>3</sub></p>
            )
    }
    
} 

export default AirQualityName