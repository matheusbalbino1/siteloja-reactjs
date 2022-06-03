import "./Card.css"
import { RiDeleteBinLine } from "react-icons/ri"
import { FiEdit } from "react-icons/fi"
import { useState } from "react"

function Card(props) {

    const [edicao, setEdicao] = useState(false)
    const [nomeVeiculo, setNomeVeiculo] = useState(props.info.nome)
    const [url, setUrl] = useState(props.info.imagem)
    const [preco, setPreco] = useState(props.info.preco)
    const [ano, setAno] = useState(props.info.ano)
    const [marca, setMarca] = useState(props.info.marca)

    function obterDados() {
        props.functionAlterar(props.info.id, nomeVeiculo, url, preco, ano, props.info.modelo, marca)
        setEdicao(false)
    }
    function excluirVeiculo(){
        if(window.confirm()){
            props.functionExcluirVeiculo(props.info.id, props.info.modelo)
        }
    }

    return (
        <div className="card" key={props.chaveUnica}>
            {edicao === false ?
                <>
                    <img src={props.info.imagem} alt={props.info.alt}></img>
                    <p>{props.info.nome}</p>
                    <p>R$ {props.info.preco}</p>
                    {props.admin ?
                        <div className="divButtons">
                            <button type="button" onClick={() => { setEdicao(true) }} className="buttonEdit"><FiEdit /></button>
                            <button type="button" onClick={()=>{excluirVeiculo()}} className="buttonRemove"><RiDeleteBinLine /></button>
                        </div>
                        :
                        <></>
                    }
                </>
                :
                <div className="divInput">

                    <div>Nome veículo:<input type="text" placeholder={props.info.nome} className="input" onChange={(parametro) => setNomeVeiculo(parametro.target.value)} value={nomeVeiculo}></input></div>

                    <div>URL Imagem:<input type="url" placeholder={props.info.imagem} className="input" onChange={(parametro) => setUrl(parametro.target.value)} value={url}></input></div>

                    <div>Preço em R$:<input type="number" placeholder={props.info.preco} className="input" onChange={(parametro) => setPreco(parseInt(parametro.target.value))}value={preco} ></input></div>

                    <div>Ano:<input type="number" placeholder={props.info.ano} className="input" onChange={(parametro) => setAno(parseInt(parametro.target.value))}value={ano} ></input></div>

                    <div>Marca:<input type="text" placeholder={props.info.marca} className="input" onChange={(parametro) => setMarca(parametro.target.value)}value={marca} ></input></div>

                    <div className="divButtons">
                        <button type="button" className="buttonEdit" onClick={() => { setEdicao(false) }}>Fechar</button>
                        <button type="button" className="buttonRemove" onClick={() => { obterDados() }}>Salvar</button>
                    </div>
                </div>
            }


        </div>


    )
}

export default Card