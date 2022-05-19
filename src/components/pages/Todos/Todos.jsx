import { useState, useEffect } from "react"
import Section from "../../Content/Section/Section"
import {AiOutlineReload} from "react-icons/ai"


function Todos() {

    // API DO SITE PEXELS

    const [photos, setphotos] = useState(false)

    useEffect(() => {
        function getImage() {

            fetch(`https://api.pexels.com/v1/search?query=car}`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Authorization": "563492ad6f91700001000001551f4ffdd6e34e50b22843792636fffa"
                }
            })
                .then(resposta => resposta.json())
                .then(data => setphotos(data.photos))
                .then(console.log(photos))
        }

        getImage()

    }, [])

    

    return (
        <main>

            {photos ?
            <>
            <Section data={photos} name="Carros / 2022"/>

            <Section data={photos} name="Carros / 2021"/>
            <Section data={photos} name="Carros abaixo de 2021"/>
            <Section data={photos} name="Motos / 2022"/>
            <Section data={photos} name="Motos / 2021"/>
            <Section data={photos} name="Motos abaixo de 2021"/>
            </>

            : // SE PHOTOS NÃO TIVER CARREGADA
            <div className="divLoadIcon">
            <AiOutlineReload className="loadIcon"/>
            <h2>Recarregue a página</h2>
            </div>
            }
          
            
        </main>
    )
}

export default Todos