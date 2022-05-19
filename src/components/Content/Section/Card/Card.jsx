import "./Card.css"

function Card(props) {
    console.log()
    return (
        <div className="card" key={props.info.id}>
            <img src={props.info.src.tiny} alt={props.info.alt}></img>
            <p>R$ {props.info.id}</p>
        </div>
    
    )
}

export default Card