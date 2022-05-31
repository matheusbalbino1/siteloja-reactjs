import "./Card.css"

function Card(props) {
    console.log()
    return (
        <div className="card" key={props.chaveUnica}>
            <img src={props.info.imagem} alt={props.info.alt}></img>
            <p>R$ {props.info.preco}</p>
        </div>
    
    )
}

export default Card