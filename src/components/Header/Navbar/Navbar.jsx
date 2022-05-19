import { BsList } from "react-icons/bs"
import { MdTransitEnterexit } from "react-icons/md"
import Buttons from "./Buttons/Buttons.jsx"
import { useState } from "react"
import "./Navbar.css"


function Navbar(props) {

    const [showMenu, setshowMenu] = useState(false)


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
            {// SE CLICAR NO BOTÃO PARA ABRIR O MENU, VAI DAR "TRUE"
            }
            {showMenu ? <>
                {props.pages.map(parametro => <Buttons name={parametro} key={parametro} />)}
                <MdTransitEnterexit
                    className="exitIcon"
                    onClick={() => changeMenu(document.getElementsByClassName("navbar-mobile")[0])} />
            </>
                :
                <BsList className="bslistIcon" onClick={() => changeMenu(document.getElementsByClassName("navbar-mobile")[0])} />
            }


        </nav>
    )
}

export default Navbar