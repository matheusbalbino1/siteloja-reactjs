import { useState, useEffect } from "react"
import Section from "../../Content/Section/Section"
import {AiOutlineReload} from "react-icons/ai"
import React from "react"

function Todos({veiculos}) {

    // API DO SITE PEXELS

    let carros = veiculos["carros"]
    console.log(carros)
    
    function refreshPage(){ 
        window.location.reload(); 
    }

    

    

    return (
        <main>

            {veiculos ?
            <>
            <Section data={veiculos} name="Carros / 2022"/>

            <Section data={veiculos} name="Carros / 2021"/>
            <Section data={veiculos} name="Carros abaixo de 2021"/>
            <Section data={veiculos} name="Motos / 2022"/>
            <Section data={veiculos} name="Motos / 2021"/>
            <Section data={veiculos} name="Motos abaixo de 2021"/>
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

export default Todos