import Header from "./components/Header/Header.jsx"
import Home from "./components/pages/Home/Home.jsx";
import Admin from "./components/pages/Admin/Admin.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css"
import { useEffect, useState } from "react";




function App() {

  // PAGINAS PARA APARECER NO MENU / NAVBAR
  const pages = ["home", "admin"]

  // FUNÇÃO PARA RECEBER TODOS OS VEICULOS DO BANCO DE DADOS
  let [veiculos, setVeiculos] = useState(false)

  useEffect(() => {

    // CHAMA A FUNÇÃO PARA REQUISITAR OS VEICULOS
    getImage()

  }, [])

  function getImage() {

    fetch(`http://localhost:4000/veiculos`, {
      method: "GET"
    })
      .then(resposta => resposta.json())
      .then(resposta => setVeiculos(resposta))

  }

  // FUNÇÃO PARA FAZER ALTERAÇÕES NOS VEICULOS
  function alterar(id, nome, url, preco, ano, modelo, marca) {

    // OBJETO PARA FAZER ALTERAÇÃO EM TODOS OS VEICULOS
    let objetoAlterado = veiculos

    // CONSTROI O OBJETO PARA ENVIAR PARA A API
    let objeto = {
      id: id,
      nome: nome,
      imagem: url,
      ano: ano,
      marca: marca,
      preco: preco,
      modelo: modelo,
      alt: "qq"
    }

    // DESCOBRIR EM QUE ARRAY ESTÁ O VEICULO A SER ALTERADO
    let contador = 0
    let countCerto = 0

    if (modelo === "carro") {
      veiculos.carro.map((veiculo) => {

        if (veiculo.id === id) {
          countCerto = contador
        }
        contador = contador + 1
      })

      // TROCA O VEICULO ANTIGO PELO VEICULO ALTERADO
      objetoAlterado.carro[countCerto] = objeto

      // SETA NOVAMENTE TODOS OS VEICULOS JUNTO COM O VEICULO ALTERADO
      setVeiculos(objetoAlterado)

    } else if (modelo === "moto") {

      veiculos.moto.map((veiculo) => {

        if (veiculo.id === id) {
          countCerto = contador
        }
        contador = contador + 1
      })

      // TROCA O VEICULO ANTIGO PELO VEICULO ALTERADO
      objetoAlterado.moto[countCerto] = objeto
      // SETA NOVAMENTE TODOS OS VEICULOS JUNTO COM O VEICULO ALTERADO
      setVeiculos(objetoAlterado)

    }

    // ENVIA O VEICULO ALTERADO PARA O BANCO DE DADOS
    fetch(`http://localhost:4000/veiculos/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(veiculos)
    })
      .then(resposta => resposta.json())
      .then(resposta => setVeiculos(resposta))

  }

  // FUNÇÃO PARA ADICIONAR VEICULOS
  function adicionarVeiculo(objeto) {
    // VAR PARA RECEBER TODOS OS VEICULOS E ADICIONAR O NOVO
    let veiculos2 = veiculos

    if (objeto.modelo == "carro") {

      veiculos2.carro.push(objeto)

    } else if (objeto.modelo == "moto") {

      veiculos2.moto.push(objeto)
    }

    // ENVIA O VEICULO NOVO PARA O BANCO DE DADOS E REQUISITA NOVAMENTE
    fetch(`http://localhost:4000/veiculos/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(veiculos2)
    })
      .then(resposta => resposta.json())
      .then(resposta => setVeiculos(resposta))

  }

  // EXCLUIR O VEICULO DO BANCO DE DADOS
  function excluirVeiculo(id, modelo) {

    let count = 0
    let counterCerto = 0
    let veiculos2 = veiculos
    veiculos[modelo].map((veiculo) => {

      if (veiculo.id == id) {
        counterCerto = count
      }
      count = count + 1
    })
    veiculos2[modelo].splice(counterCerto, 1)

    // ENVIA OS VEICULOS PARA O BANCO DE DADOS SEM O VEICULO QUE FOI EXCLUIDO
    fetch(`http://localhost:4000/veiculos/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(veiculos2)
    })
      .then(resposta => resposta.json())
      .then(resposta => setVeiculos(resposta))

    alert("VEICULO REMOVIDO")
  }

  return (
    <div className="App">
      <Header pages={pages} />
      <Routes>
        <Route path="/" element={<Home veiculos={veiculos} />} />
        <Route path="/home" element={<Home veiculos={veiculos} />} />
        <Route path="/admin" element={
          <Admin veiculos={veiculos} functionAlterar={alterar} functionAdicionarVeiculo={adicionarVeiculo} functionExcluirVeiculo={excluirVeiculo} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
