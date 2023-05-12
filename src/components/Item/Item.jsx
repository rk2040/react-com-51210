import React from 'react'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './Item.css'

import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img, idCat, stock}) => {
    useEffect(() => {
        AOS.init();
    }, []);
    
    return (
        <div className='cardProducto' data-aos="fade-up">
            <img className='imgProducto' src={img} alt={nombre} />
            <h3 className='nombreProducto'>{nombre}</h3>
            <p className='precioProducto'>Precio: $ {precio}</p>
            <p>Categoria: {idCat}</p>
            <p>Stock: {stock}</p>
            
            <Link className='linkProducto' to={`/item/${id}`}> Ver Detalle </Link>
        </div>
    )
}

export default Item