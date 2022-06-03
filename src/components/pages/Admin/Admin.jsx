import { useState, useEffect } from "react"
import { AiOutlineReload } from "react-icons/ai"

import React from "react"
import "./Admin.css"
import Section from "../../Content/Section/Section.jsx"
import Adicionarveiculo from "../../Content/AdicionarVeiculo/AdicionarVeiculo.jsx"

function Admin({ veiculos, functionAlterar, functionAdicionarVeiculo, functionExcluirVeiculo }) {

    const [todosVeiculos, setTodosVeiculos] = useState(false)
    const [filtrarModelo, setFiltrarModelo] = useState(false)
    const [filtrarAno, setFiltrarAno] = useState(false)
    const [todosAnos, setTodosAnos] = useState(false)
    const [filtrarTudo, setFiltrarTudo] = useState([false, false])

    useEffect(() => {

        if (veiculos !== false) {
            // PEGA TODOS OS CARROS E MOTOS E TRANSFORMA EM UM UNICO ARRAY
            setTodosVeiculos([...veiculos.carro, ...veiculos.moto])

        }

    }, [veiculos])

    useEffect(() => {
        if (todosVeiculos) {
            // PARA PEGAR TODOS OS ANOS DOS VEICULOS E MOSTRAR NOS FILTROS
            let TodosAnos = []
            todosVeiculos.map((veiculo) => {

                TodosAnos.push(parseInt(veiculo.ano))

            })

            let filtrar = TodosAnos.filter((este, i) => TodosAnos.indexOf(este) === i);
            filtrar.sort()
            setTodosAnos(filtrar)
        }
    }, [todosVeiculos])

    function ano() { // PARA FILTRAR OS VEICULOS PELO ANO ESCOLHIDO

        if (document.getElementById("selectAno").selectedIndex != 0) {
            setFiltrarAno(parseInt(todosAnos[document.getElementById("selectAno").selectedIndex - 1]))
        } else {
            setFiltrarAno(false)
        }

    }

    function refreshPage() {
        window.location.reload();
    }

    function handleSubmit(evt) { // PARA FILTRAR OS VEICULOS PELO TIPO ESCOLHIDO

        evt.preventDefault()

        ano()

        if (document.getElementById("checkMoto").checked) {
            setFiltrarModelo("moto")
        }

        if (document.getElementById("checkCarro").checked) {
            setFiltrarModelo("carro")
        }

        if (document.getElementById("checkTodos").checked) {
            setFiltrarModelo(false)
        }

        if (!document.getElementById("checkTodos").checked && !document.getElementById("checkCarro").checked && !document.getElementById("checkMoto").checked) {
            setFiltrarModelo(false)
        }
    }

    return (

        <main className="mainAdmin">
            <form onSubmit={handleSubmit}>
                <div className="divFiltros">
                    <div className="divButton"><button type="submit">Filtrar</button></div>
                    <div className="divInputs">
                        <label><input type="radio" name="checkModelo" id="checkMoto" />Moto</label>
                        <label><input type="radio" name="checkModelo" id="checkCarro" />Carro</label>
                        <label><input type="radio" name="checkModelo" id="checkTodos" />Todos Modelos</label>
                        <label>Ano:
                            {todosAnos &&
                                <select name="" id="selectAno">
                                    <option value={0}>Todos</option>
                                    {
                                        todosAnos.map((ano) => {
                                            return (
                                                <option value={ano} key={ano}>{ano}</option>
                                            )
                                        })}
                                </select>
                            }
                        </label>
                    </div>
                </div>
            </form>

            {
            todosVeiculos && <Adicionarveiculo todosVeiculos={todosVeiculos} functionAdicionarVeiculo={functionAdicionarVeiculo} />
            }

            <section>

                {veiculos ?
                    <Section name={"Veículos"} todosVeiculos={todosVeiculos} admin={true} functionAlterar={functionAlterar} ano={filtrarAno} modelo={filtrarModelo} functionExcluirVeiculo={functionExcluirVeiculo} />
                    : // SE PHOTOS NÃO TIVER CARREGADA
                    <div className="divLoadIcon">
                        <AiOutlineReload className="loadIcon" onClick={refreshPage} />
                        <h2>Recarregue a página</h2>
                    </div>
                }

            </section>
        </main>

    )
}

export default Admin