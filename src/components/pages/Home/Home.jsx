import { useState, useEffect } from "react"
import Section from "../../Content/Section/Section"
import {AiOutlineReload} from "react-icons/ai"
import "./Home.css"

function Home({veiculos}) {

    // API DO SITE PEXELS
    const [todosVeiculos,setTodosVeiculos] = useState(false)
    // const [veiculos2022, setVeiculos2022] = useState([])


    // function checarAno(veiculoAno, ano){
    //     return veiculoAno.ano === ano
    // }

    useEffect(()=>{

        if (veiculos !== false){
            setTodosVeiculos([...veiculos.carros, ...veiculos.motos] || "DEFAULT")
        }

    },[veiculos])

    // useEffect(()=>{

    //     if(todosVeiculos !== false){
    //         setVeiculos2022(todosVeiculos.filter((parametro)=>{return checarAno(parametro,2022)}))
    //     }
        
    // },[todosVeiculos])
    

   

    function refreshPage(){ 
        window.location.reload(); 
    }
    

    return (
        <main className="home">

            {todosVeiculos ?
            <>
            <Section todosVeiculos={todosVeiculos} ano={2022} name="Veículos 2022"/>
            <Section todosVeiculos={todosVeiculos} ano={2021} name="Veículos 2021"/>
            <Section todosVeiculos={todosVeiculos} modelo={"carro"} name="Carros"/>
            <Section todosVeiculos={todosVeiculos} modelo={"moto"} name="Motos"/>
        
            </>

            : // SE PHOTOS NÃO TIVER CARREGADA
            <div className="divLoadIcon">
            <AiOutlineReload className="loadIcon" onClick={refreshPage}/>
            <h2>Recarregue a página</h2>
            </div>
            }
          
            
        </main>
    )
}

export default Home