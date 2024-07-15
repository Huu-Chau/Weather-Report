import "./header-action.styles.css"

const HeaderAction = () => {
    return(
        <div className="header-action">
            <button 
                class="icon-btn has-state" 
                aria-label="open search" 
                data-search-toggler=""
            >
                <span class="m-icon icon">search</span>
            </button>

            <a 
                href="#/current-location" 
                class="btn-primary has-state" 
                data-current-location-btn="" 
                disabled=""
            >
                <span class="m-icon">my_location</span>
                <span class="span">Current Location</span>
          </a>
        </div>
    )
}

export default HeaderAction