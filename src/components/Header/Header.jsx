import "./Header.css"
import Navbar from "./Navbar/Navbar"

function Header(props){

    return(
        <header className="header">
            <h1>MATHEUS AUTOMÓVEIS</h1>
            <Navbar pages={props.pages}/>  
                    
        </header>
    )
}

export default Header