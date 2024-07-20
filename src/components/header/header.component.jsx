import "./header.styles.css"
import SearchView from "../search-view/search-view.component"
import HeaderActions from "../header-actions/header-actions.component"
import { useState } from "react"

const Header = ({cityHandler, setSearchValue}) => {
    const [activeSV, setactiveSV] = useState(false) 
    function activeHandler(){
        setactiveSV(!activeSV)
    }
    return(
        <header className="header">
            <div className="container">
                <a href="#" className="logo">
                    <img src="./Skystery.png" alt="logo"/>
                </a>
                <SearchView 
                    activeSV={activeSV} 
                    onClickActive={activeHandler}
                    cityHandler={cityHandler}
                    setSearchValue={setSearchValue}
                />
                <HeaderActions onClickActive={activeHandler} setSearchValue={setSearchValue} cityHandler={cityHandler}/>
            </div>
        </header>      
    )
}

export default Header