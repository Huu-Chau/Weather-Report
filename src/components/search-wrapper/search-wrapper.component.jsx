import "./search-wrapper.styles.css"

const SearchWrapper = () => {
    return(
        <div className="search-wrapper">
            <input 
                type="search" 
                name="search" 
                placeholder="Search city..." 
                autoComplete="off"
                className="search-field" 
                data-search-field="">
            </input>
            <span className="m-icon leading-icon">Search</span>
            <button
              className="icon-btn leading-icon has-state"
              aria-label="close search"
            >
              <span class="m-icon">arrow_back</span>
            </button>
        </div>
    )
}

export default SearchWrapper