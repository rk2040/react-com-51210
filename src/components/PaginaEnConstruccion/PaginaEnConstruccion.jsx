import React from 'react'
import './PaginaEnConstruccion.css'

const PaginaEnConstruccion = () => {
    const imgConstruccion = "https://static.vecteezy.com/system/resources/previews/000/192/096/original/vector-website-under-construction.png";
    return (
        <div className='contenedorConstruccion'>
            <h2 className='sitioEnContruccion'>Sitio en Construcción</h2> 
            <img className='imgEnConstruccion' src={imgConstruccion} alt="Sitio en Construccion" />
        </div>
    )
}

export default PaginaEnConstruccion