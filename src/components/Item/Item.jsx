import React from 'react'
import './Item.css'
// import Contador from '../Contador/Contador'

import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
    return (
        <div className='cartProducto'>
            <img className='imgProducto' src={img} alt={nombre} />
            <h3>{nombre}</h3>
            <p>Precio: $ {precio}</p>
            <p>ID: {id}</p>            
            
            <Link className='linkProducto' to={`/item/${id}`}> Ver Detalle </Link>
            {/* <Contador/> */}
        </div>
    )
}

export default Item