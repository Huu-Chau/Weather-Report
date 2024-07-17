import "./search-view.styles.css"
import SearchWrapper from "../search-wrapper/search-wrapper.component"
import SearchResult from "../search-result/search-result.component"

const SearchView = ({onClick, active}) => {
    return(
        <div className={`${active? 'active' : ''} search-view`}>
            <SearchWrapper onClick={onClick}/>
            <SearchResult/>
        </div>
    )
}

export default SearchView