import { useState, useEffect } from "react"
import Card from "./Card/Card"
import "./Section.css"

function Section(props) {

    const [veiculos, setVeiculos] = useState(false)
    const [veiculoFiltradoAno, setVeiculoFiltradoAno] = useState(false)
    const [veiculoFiltradoModelo, setVeiculoFiltradoModelo] = useState(false)
    const [veiculoFiltrado, setVeiculoFiltrado] = useState(false)

    console.log(props.name)
    console.log(veiculoFiltrado)

    useEffect(() => {

        setVeiculos(props.todosVeiculos)

    })

    useEffect(() => {

        if (veiculos) {
            if (props.ano && props.modelo) {
                setVeiculoFiltradoAno(veiculos.filter((veiculo) => { return veiculo.ano === props.ano }))
                if (veiculoFiltradoAno) {
                    setVeiculoFiltrado(veiculoFiltradoAno.filter((veiculo) => { return veiculo.modelo === props.modelo }))
                }
            } else if (props.modelo && !props.ano) {
                setVeiculoFiltrado(veiculos.filter((veiculo) => { return veiculo.modelo === props.modelo }))
            } else if (props.ano && !props.modelo) {
                setVeiculoFiltrado(veiculos.filter((veiculo) => { return veiculo.ano === props.ano }))
            } else {
                setVeiculoFiltrado(veiculos)
            }

        }
    }, [veiculos])






    return (
        <main className="content">
            <h2>{props.name}</h2>
            <article>
                {veiculoFiltrado && veiculoFiltrado.map((parametro) => {
                    return (
                        <Card info={parametro} chaveUnica={parametro.id} />
                    )
                })}
            </article>

        </main>
    )
}



export default Section