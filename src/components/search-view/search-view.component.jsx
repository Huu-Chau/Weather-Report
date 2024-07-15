import "./search-view.styles.css"
import SearchWrapper from "../search-wrapper/search-wrapper.component"

const SearchView = ({classSearchView}) => {
    return(
        <div className={` ${classSearchView}`}>
            <SearchWrapper/>
            <div className="search-result"/>
        </div>
    )
}

export default SearchView