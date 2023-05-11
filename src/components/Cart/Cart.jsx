import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const {carrito, emptyCart} = useContext(CarritoContext);
    const totalCantidad = carrito.reduce( (total, producto)=> total + producto.cantidad, 0);
    const total = carrito.reduce( (total, producto)=> total + (producto.item.precio * producto.cantidad), 0);

    if(totalCantidad === 0){
        return(
            <div className='contenedorCarritoVacio'>
                <h2 className='noHayProductos'> No hay productos en el carrito. </h2>
                <Link className='linkBtnCarrito' to='/tienda'> Ver Tienda </Link>
            </div>
        )
    }

    return(
        <>
        {carrito.map(producto=> <CartItem key={producto.item.id} {...producto} />) }
        <div className='contenedorCarritoFinal'>
            <Link className='linkBtnCarrito' to='/tienda'> Seguir Viendo </Link>
            <button className='linkBtnCarrito' onClick={()=> emptyCart()} > Vaciar Carrito </button>
            <Link className='linkBtnCarrito' to='/Checkout' > Finalizar Compra </Link>
            <h3 className='precioTotal'> Total: ${total} </h3>
        </div>
        </>
    )
}

export default Cart