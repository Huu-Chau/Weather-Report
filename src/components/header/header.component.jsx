import "./header.styles.css"
import SearchView from "../search-view/search-view.component"
import HeaderActions from "../header-actions/header-actions.component"

const Header = () => {
    return(
        <header className="header">
            <div className="container">
                <a href="#" className="logo">
                    <img src="./Skystery.png" alt="logo"/>
                </a>
                <SearchView/>
                <HeaderActions/>
            </div>
        </header>      
    )
}

export default Header