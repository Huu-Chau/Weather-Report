import "./header-actions.styles.css"

const HeaderActions = ({onClickActive, cityHandler}) => {
    return(
        <div className="header-actions">
            <button 
                className="icon-btn has-state" 
                aria-label="open search" 
                onClick={onClickActive}
            >
                <span className="m-icon icon">search</span>
            </button>

            <a 
                href="#" 
                className="btn-primary has-state"
                onClick={cityHandler}
            >
                <span className="m-icon">my_location</span>
                <span className="span">Submit Location</span>
            </a>
        </div>
    )
}

export default HeaderActions