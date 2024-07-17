import "./search-wrapper.styles.css"

const SearchWrapper = ({onClick}) => {
    return(
        <div className="search-wrapper">
            <input 
                type="search" 
                name="search" 
                placeholder="Search city..." 
                autoComplete="off"
                className="search-field"
            >
            </input>

            <span className="m-icon leading-icon">Search</span>

            <button
              className="icon-btn leading-icon has-state"
              aria-label="close search"
              onClick={onClick}
            >
              <span className="m-icon">arrow_back</span>
            </button>
        </div>
    )
}

export default SearchWrapper