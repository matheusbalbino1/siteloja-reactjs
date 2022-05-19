import "./Header.css"

import Navbar from "./Navbar/Navbar"



function Header(props){
    return(
        <header className="header">
            <Navbar pages={props.pages}/>
            <h1>MATHEUS AUTOMÓVEIS</h1>
        </header>
    )
}

export default Header