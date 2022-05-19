import { useState, useEffect } from "react"
import Card from "./Card/Card"
import "./Section.css"

function Section(props) {

    console.log(props.data)

    const [photos, setphotos] = useState(props.data)

    return (
        <main className="content">
            <h2>{props.name}</h2>
            <article>
            {photos && photos.map((parametro) => {
                return (
                    <Card info={parametro} key={parametro.id} />
                )
            })}
            </article>
        </main>
    )
}

export default Section