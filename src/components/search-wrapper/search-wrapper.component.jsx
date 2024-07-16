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
        </div>
    )
}

export default SearchWrapper