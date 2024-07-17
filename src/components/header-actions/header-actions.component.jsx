import "./header-actions.styles.css"

const HeaderActions = ({onClick}) => {
    return(
        <div className="header-actions">
            <button 
                className="icon-btn has-state" 
                aria-label="open search" 
                onClick={onClick}
            >
                <span className="m-icon icon">search</span>
            </button>

            <a 
                href="#/current-location" 
                className="btn-primary has-state" 
                data-current-location-btn="" 
                // disabled=""
            >
                <span className="m-icon">my_location</span>
                <span className="span">Current Location</span>
            </a>
        </div>
    )
}

export default HeaderActions