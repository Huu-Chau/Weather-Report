// import "./search-view.styles.css"
import SearchWrapper from "../search-wrapper/search-wrapper.component"
// import SearchResult from "../search-result/search-result.component"

const SearchView = ({onClickActive, activeSV, cityHandler, setSearchValue}) => {

    return(
        <div className={`${activeSV ? 'active search-view' : 'search-view'}`}>
            <SearchWrapper onClickActive={onClickActive} setSearchValue={setSearchValue}/>
            {/* <SearchResult activeSV={activeSV} cityHandler={cityHandler}/> */}
        </div>
    )
}

export default SearchView