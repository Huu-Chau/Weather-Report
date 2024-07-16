import "./search-view.styles.css"
import SearchWrapper from "../search-wrapper/search-wrapper.component"
import { useState } from "react"

const SearchView = () => {
    const [isActive, setisActive] = useState(false) 

    const activeToggle = (click) => {

    }

    return(
        <div className={`${isActive? 'active' : ''} search-view`}>
            <SearchWrapper/>
            <div className="search-result"/>
        </div>
    )
}

export default SearchView