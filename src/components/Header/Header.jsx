import "./Header.css"
import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar"



function Header(props){

    let largura = window.screen.width
  
    return(
        <header className="header">
            <h1>MATHEUS AUTOMÓVEIS</h1>
            <Navbar pages={props.pages}/>  
                    
        </header>
    )
}

export default Header