
import { createContext, useState } from "react";
import Swal from 'sweetalert2';

export const CarritoContext = createContext( {carrito:[]} );

export const CarritoProvider = ( {children} )=> {

    const [carrito, setCarrito] = useState([]); 

    const addToCart = (item, cantidad)=> {
        if( !isInCart(item.id) ){
            setCarrito(previo => [...previo, {item, cantidad}] );
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se agrego ' + cantidad + ' producto/s al carrito',
                showConfirmButton: false,
                timer: 500
            })
        }
        else{
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: item.nombre + ' esta en cargado en el carrito',
                showConfirmButton: false,
                timer: 800
            })
        }
    }

    const isInCart = (id)=> {
        return carrito.some( (prod) => prod.item.id === id);
    }

    const deleteToCart = (id)=> {
        console.log("Eliminado producto id: ", id);
        console.log("carrito antes:", carrito)
        const updatedCart = carrito.filter( prod => prod.item.id !== id );
        setCarrito(updatedCart);
        console.log("carrito despues:",updatedCart);
    }

    const emptyCart = ()=> {
        setCarrito([]);
    }

    return (
        <CarritoContext.Provider value={ {carrito, addToCart, deleteToCart, emptyCart} }>
            {children}
        </CarritoContext.Provider>
    )
}