import React from 'react'
import './CartItem.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import Swal from 'sweetalert2'


const CartItem = ( {item, cantidad} ) => {
    const {deleteToCart} = useContext(CarritoContext);

    const eliminoDelCarrito= ()=> {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se elimino ' + cantidad +' '+ item.nombre + ' del carrito',
            showConfirmButton: false,
            timer: 1000
        })
    }

    const handlerAgregardoAlCarrito = ()=> {
        deleteToCart(item.id);
        eliminoDelCarrito();
    }
    
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
                <button className='btnEliminar' onClick={ handlerAgregardoAlCarrito }> Eliminar </button>
            </div>
        </div>
    )
}

export default CartItem