import React from "react";
import domingo from "../images/DomingoMartinez.jpg"
import data from "../data/data.json"
import { GatsbyImage } from "gatsby-plugin-image";
const Consejo =()=>{
    console.log(data)
    return(
        <>
        <h1>Página del Consejo</h1>
        <div className='cards'>
            {data.map(
                (item) => (
                    <div key={item.id} className='card'>
                    <h2>{item.nombre}</h2>
                    <h3>Cargo: {item.cargo}</h3>
                    <figure>
                        <img
                        srce={item.image}
                        alt ={item.nombre}
                        />
                    </figure>
                    <p>{item.descripcion}</p>
                    <a href={item.rrss}>Mi personal Page</a>
                </div>
                )
            )}
        </div>
        </>
    )
}
export default Consejo
