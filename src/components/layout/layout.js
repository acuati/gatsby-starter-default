import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "../navbar/navbar"
import "./layout.css"
const Layout=({children})=>{

    return(
        <>
        <Navbar></Navbar>
        <header className='header'>
            <StaticImage 
            src='../../images/patrimonio.jpg'
            alt='Logotipo de Patrimonio Nacional'
            width={300}
            height={100}
            placeholder="blurred"
            layout='constrained'
            className='logotipo'
             />
            <h1>Esto es el header</h1>
        </header>
        <div>
         {children}
        </div>
        <footer>
        <p>Esto es el footer</p>
        </footer>
        </>
    )
}
export default Layout