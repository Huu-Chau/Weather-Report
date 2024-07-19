const SunriseSunset = ({sunrise, sunset, timezone}) => {
    const option = {
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true, // This ensures the format is 12-hour with AM/PM
        timeZone: 'UTC'
    }
    const convertUnixTimestamp = (timestamp, timezoneOffset) => {
        // Convert the timestamp to milliseconds and create a Date object
        const date = new Date((timestamp + timezoneOffset) * 1000);
        return date.toLocaleString(undefined, option); // Returns the date in a readable format
    }
    const sunriseTime = convertUnixTimestamp(sunrise, timezone)
    const sunsetTime = convertUnixTimestamp(sunset, timezone)
    return(
        <div className="card card-sm highlight-card two">
            <h3 className="title-3">Sunrise & Sunset</h3>
            <div className="card-list">
            <div className="card-item">
                <span className="m-icon">clear_day</span>
                <div>
                <p className="label-1">Sunrise</p> 
                <p className="title-1">{sunriseTime}</p>
                </div>
            </div>
            <div className="card-item">
                <span className="m-icon">clear_night</span>
                <div>
                <p className="label-1">Sunset</p> 
                <p className="title-1">{sunsetTime}</p>
                </div>
            </div>
            </div>
        </div>
    )
} 

export default SunriseSunset