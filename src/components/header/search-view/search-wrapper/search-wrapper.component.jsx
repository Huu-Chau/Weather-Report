import { useState } from "react"
import "./search-wrapper.styles.css"

const SearchWrapper = ({onClickActive, setSearchValue}) => {
  const [searchingSV, setsearchingSV] = useState(false)
  const searchHandleChange = (e) => {
    // setsearchingSV(!searchingSV)
    setSearchValue(e.target.value);
  };

    return(
        <div className="search-wrapper">
            <input 
                type="search" 
                name="search" 
                placeholder="Search city..." 
                autoComplete="off"
                className={searchingSV ? 'search-field searching' : 'search-field'}
                onChange={searchHandleChange}
            />
            <span className="m-icon leading-icon">Search</span>
            <button
              className="icon-btn leading-icon has-state"
              aria-label="close search"
              onClick={onClickActive}
            >
              <span className="m-icon">arrow_back</span>
            </button>
        </div>
    )
}

export default SearchWrapper