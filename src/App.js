import  Header  from "./components/Header/Header.jsx"
import Home from "./components/pages/Home/Home.jsx";
import Todos from "./components/pages/Todos/Todos.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css"
import { useEffect, useState } from "react";

const pages = ["home","admin"]

function App() {

  let [veiculos, setVeiculos] = useState(false)
  
  useEffect(() => {
  
  
    function getImage() {

        fetch(`http://localhost:3000/veiculos`, {
            method: "GET"
        })
            .then(resposta => resposta.json())
            .then(resposta => setVeiculos(resposta))
            
    }

    getImage()

}, [])


  return (
    <div className="App">
      <Header pages={pages}/>
    <Routes>
      <Route path="/" element={<Home veiculos={veiculos}/>} />
      <Route path="/home" element={<Home veiculos={veiculos}/>} />
    </Routes>
      <Footer/>
    </div>
  );
}

export default App;
