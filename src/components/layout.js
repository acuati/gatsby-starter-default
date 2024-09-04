import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import './layout.css'
const Layout=({children})=>{
    return(
        <>
        
        <header>
       
            <StaticImage 
            src='../images/patrimonio.jpg'
            // src='../../images/patrimonio.jpg'
            alt='Logotipo de Patrimonio Nacional'
            width={300}
            height={100}
            placeholder="blurried"
            layout='constrained'
            className='logotipo'
            />
            <p>Esto es el header</p>
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