// import SearchItem from "../search-item/search-item.component"

const SearchResult = ({activeSV, cityHandler}) => {
    return (
        <div className={`search-result ${activeSV ? 'active' : ''}`}>
            {/* <ul className="view-list">
                <SearchItem/>
            </ul> */}
        </div>
    )
}

export default SearchResult