import React from "react";
import { Link } from "gatsby";
import './navbar.css'
const Navbar = ()=>{
    return(
        <>
        <nav className='navbartdm'>
            <ul>
            <li>
            <Link to ='/'> Home</Link>
            </li>
                <li>
                    <Link to ='/consejo'> Consejo de Administración</Link>
                 </li>
              
            </ul>
        </nav>
        </>
    )

}
export default Navbar