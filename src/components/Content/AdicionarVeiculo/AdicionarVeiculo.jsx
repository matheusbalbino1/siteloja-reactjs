import React from "react"
import "./AdicionarVeiculo.css"
import { useState } from "react"

function AdicionarVeiculo ({todosVeiculos, functionAdicionarVeiculo}) {

    const [nomeVeiculo, setNomeVeiculo] = useState("")
    const [url, setUrl] = useState("")
    const [preco, setPreco] = useState("")
    const [anoVeiculo, setAnoVeiculo] = useState("")
    const [marca, setMarca] = useState("")
    const [hiddenAdd, setHiddenAdd] = useState(true)
    function addVeiculo(evt) {

        evt.preventDefault()
        if(nomeVeiculo && url && preco && anoVeiculo && marca){
            let idVeiculo = 0

        todosVeiculos.map((veiculo) => {
            if (veiculo.id >= idVeiculo) {
                idVeiculo = veiculo.id
            }
        })
        idVeiculo = idVeiculo + 1
        let modeloNovo = 0
        if (document.getElementById("selectModelo").selectedIndex == 0) {
            modeloNovo = "moto"
        } else {
            modeloNovo = "carro"
        }
        let veiculoNovo = {
            id: idVeiculo,
            nome: nomeVeiculo,
            imagem: url,
            ano: parseInt(anoVeiculo),
            marca: marca,
            preco: parseFloat(preco),
            modelo: modeloNovo,
            alt:"teste"
        }

        functionAdicionarVeiculo(veiculoNovo)
        setAnoVeiculo("")
        setMarca("")
        setNomeVeiculo("")
        setUrl("")
        setPreco("")
        setHiddenAdd(true)
        }else{
            alert("PREENCHA TODOS OS CAMPOS")
            if(!window.confirm()){
                setHiddenAdd(true)
            }
        }
        
    }

    return (
        <div>
            {hiddenAdd ? <div className="divAdicionar" id="divAdicionar"><button type="button" onClick={()=>{setHiddenAdd(false)}}>ADICIONAR VEÍCULO</button></div>
            :
            <form onSubmit={addVeiculo} className="formAdd" id="formAdd">
                <label name="nome" >NOME: <input name="nome" type="text" onChange={(parametro) => setNomeVeiculo(parametro.target.value)}  value={nomeVeiculo} /></label>
                <label name="imagem">URL DA IMAGEM: <input name="imagem"  type="url" onChange={(parametro) => setUrl(parametro.target.value)} value={url} /></label>
                <label name="preco">PREÇO: <input name="preco" type="number"  onChange={(parametro) => setPreco(parametro.target.value)} value={preco} /></label>
                <label name="ano" >ANO: <input name="ano" type="number"  onChange={(parametro) => setAnoVeiculo(parametro.target.value)} value={anoVeiculo} /></label>
                <label name="marca">MARCA: <input name="marca" type="text"  onChange={(parametro) => setMarca(parametro.target.value)} value={marca} /></label>
                <label>MODELO:
                    <select id="selectModelo">
                        <option value="moto">MOTO</option>
                        <option value="carro">CARRO</option>
                    </select>
                </label>
                <button type="submit" id="buttonSubmit">Finalizar</button>
            </form>
            }
                 
        </div>
    )
}

export default AdicionarVeiculo;