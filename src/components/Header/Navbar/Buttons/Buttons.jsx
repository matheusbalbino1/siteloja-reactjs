import "./Buttons.css"
import { Link } from "react-router-dom";

function Buttons(props){
    console.log(props.name)
    return(
        <Link to={`/${props.name}`} className="buttonsMenu" onClick={(event)=>event.preventDefault}>{props.name}</Link>
    )
}

export default Buttons