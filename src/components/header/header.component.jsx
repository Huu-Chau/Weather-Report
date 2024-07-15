import "./header.styles.css"
import SearchView from "../search-view/search-view.component"
import HeaderAction from "../header-action/header-action.component"

const Header = () => {
    return(
        <header className="header">
            <div className="container">
                <a href="#" className="logo">
                    <img src="./Skystery.png" alt="logo"/>
                </a>
                <SearchView classSearchView="search-view"/>
                <HeaderAction/>
            </div>
        </header>      
    )
}

export default Header