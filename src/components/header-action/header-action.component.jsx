import "./header-action.styles.css"

const HeaderAction = () => {
    return(
        <div className="header-action">
            <button 
                className="icon-btn has-state" 
                aria-label="open search" 
                data-search-toggler=""
            >
                <span className="m-icon icon">search</span>
            </button>

            <a 
                href="#/current-location" 
                className="btn-primary has-state" 
                data-current-location-btn="" 
                disabled=""
            >
                <span className="m-icon">my_location</span>
                <span className="span">Current Location</span>
          </a>
        </div>
    )
}

export default HeaderAction