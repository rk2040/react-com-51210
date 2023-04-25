import React from 'react'
import './Item.css'

import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img, idCat}) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <h3 className='nombreProducto'>{nombre}</h3>
            <p className='precioProducto'>Precio: $ {precio}</p>
            <p>Categoria: {idCat}</p>
            {/* <p>ID: {id}</p>             */}
            
            <Link className='linkProducto' to={`/item/${id}`}> Ver Detalle </Link>
        </div>
    )
}

export default Item