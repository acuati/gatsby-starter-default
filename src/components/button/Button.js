import React from "react";
import './Button.css'
const functionDefault = ()=>{}
const  styleDefault = {
    boxShadow:' black 6px 6px 12px',
    borderRadius: '12px'
}
const Button =({
    onClick= functionDefault, 
    style =styleDefault, 
    children ='haz click',
    className
})=>{
    return (
        <>
        <button 
        onClick={onClick} 
        style={style} 
        className={className}>
            {children}
        </button>
        </>
    )

}

export default Button
