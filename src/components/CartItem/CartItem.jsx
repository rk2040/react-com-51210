import React from 'react'
import './CartItem.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'


const CartItem = ( {item, cantidad} ) => {
    const {deleteToCart} = useContext(CarritoContext);
    
    return (
        <div className='contenedorProductoCart'>
            <div className='imgYDetalleCart'>
                <img className='imgCart' src={item.img} alt={item.nombre} />
                <div className='productoCart'>
                    <h4> {item.nombre} </h4>
                    <p> Descripcion: {item.descripcion} </p>
                    <p>Id: {item.id} </p>
                </div>
            </div>
            <div className='precioProductoCart'>
                <p> Cantidad: {cantidad} </p>
                <p> Precio: ${item.precio} </p>
                <button className='btnEliminar' onClick={()=> deleteToCart(item.id) }> Eliminar </button>
            </div>
        </div>
    )
}

export default CartItem