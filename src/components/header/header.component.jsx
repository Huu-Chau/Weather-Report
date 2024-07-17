import "./header.styles.css"
import SearchView from "../search-view/search-view.component"
import HeaderActions from "../header-actions/header-actions.component"
import { useState } from "react"

const Header = () => {
    const [isActiveSV, setisActiveSV] = useState(false) 

    const activeToggle = () => {
        // console.log(isActiveSV)
        setisActiveSV(!isActiveSV)
    }

    return(
        <header className="header">
            <div className="container">
                <a href="#" className="logo">
                    <img src="./Skystery.png" alt="logo"/>
                </a>
                <SearchView active={isActiveSV} onClick={activeToggle}/>
                <HeaderActions onClick={activeToggle}/>
            </div>
        </header>      
    )
}

export default Header