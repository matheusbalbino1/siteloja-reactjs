import { BsList } from "react-icons/bs"
import { MdTransitEnterexit } from "react-icons/md"
import Buttons from "./Buttons/Buttons.jsx"
import { useState, useEffect } from "react"
import "./Navbar.css"


function Navbar(props) {

    const [showMenu, setshowMenu] = useState(false)

    const [largura, setLargura] = useState(window.screen.width)


    useEffect(()=>{
        setLargura(window.screen.width)
    },[window.screen.width])

    console.log(largura)
    function changeMenu(componente) {
        componente.classList.toggle("open")

        if (showMenu) {
            setshowMenu(false)
        } else {
            setshowMenu(true)
        }
    }

    return (
        <nav
            className="navbar-mobile"
        >   

            
            {showMenu == true || largura >= 900 ? <>
            {props.pages.map(parametro => <Buttons name={parametro} key={parametro} />)}
            {largura < 900 ? <MdTransitEnterexit
                className="exitIcon"
                onClick={() => changeMenu(document.getElementsByClassName("navbar-mobile")[0])} /> : <></>}
            
        </>
            :
            <BsList className="bslistIcon" onClick={() => changeMenu(document.getElementsByClassName("navbar-mobile")[0])} />
            }

            {// SE CLICAR NO BOTÃO PARA ABRIR O MENU, VAI DAR "TRUE"
            }


        </nav>
    )
}

export default Navbar