import { useState, useEffect } from "react"
import Card from "./Card/Card"
import "./Section.css"

function Section(props) { // PODE RECEBER MODELO  MOTO, CARRO E ANO

    const [veiculos, setVeiculos] = useState(false)
    const [veiculoFiltradoAno, setVeiculoFiltradoAno] = useState(false)
    const [veiculoFiltradoModelo, setVeiculoFiltradoModelo] = useState(false)
    const [veiculoFiltrado, setVeiculoFiltrado] = useState(false)
    const [admin, setAdmin] = useState(false)

    useEffect(() => {

        setVeiculos(props.todosVeiculos)

        if (props.admin === true) {
            setAdmin(true)
        }

    })

    useEffect(() => {

        if (veiculos) {
            let teste = []
            if (props.ano && props.modelo) {

                teste = veiculos.filter((veiculo) => { return veiculo.ano === props.ano && veiculo.modelo === props.modelo })
                if (teste.length == 0) {
                    setVeiculoFiltrado(false)
                } else {
                    setVeiculoFiltrado(teste)
                }

            } else if (props.modelo && !props.ano) {
                setVeiculoFiltrado(veiculos.filter((veiculo) => { return veiculo.modelo === props.modelo }))
            } else if (props.ano && !props.modelo) {
                setVeiculoFiltrado(veiculos.filter((veiculo) => { return veiculo.ano === props.ano }))
            } else {
                setVeiculoFiltrado(veiculos)
            }
        }

    }, [veiculos, props.modelo, props.ano])

    return (
        <main className="content">
            <h2>{props.name}</h2>
            <article>

                {veiculoFiltrado ?
                    veiculoFiltrado.map((parametro) => {
                        return (
                            <Card info={parametro} chaveUnica={parametro.id} admin={admin} functionAlterar={props.functionAlterar} key={parametro.id} functionExcluirVeiculo={props.functionExcluirVeiculo}/>
                        )
                    })
                    :
                    <h2>SEM VEÍCULOS COM ESSE FILTRO</h2>
                }

            </article>
        </main>
    )
}



export default Section