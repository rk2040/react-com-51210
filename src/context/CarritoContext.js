
import { createContext, useState } from "react";
import Swal from 'sweetalert2';

export const CarritoContext = createContext( {carrito:[]} );

export const CarritoProvider = ( {children} )=> {

    const [carrito, setCarrito] = useState([]); 

    /* const alertAddToCart = (cant)=> {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se agrego ' + cant + ' producto/s al carrito',
            showConfirmButton: false,
            timer: 500
        })
    } */

    const addToCart = (item, cantidad)=> {
        /* if(isInCart(item.id)){
            setCarrito(carrito.map( (prod)=>{
                if(prod.id === item.id) return {...prod, cantidad: prod.cantidad + cantidad}
            }));
            alertAddToCart(cantidad);
        }
        else{
            setCarrito(previo => [...previo, {item, cantidad}] );
            alertAddToCart(cantidad);
        } */
        if( !isInCart(item.id) ){
            setCarrito(previo => [...previo, {item, cantidad}] );
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Se agrego  ${cantidad}  producto/s al carrito`,
                showConfirmButton: false,
                timer: 500
            })
        }
        else{
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: `${item.nombre}.  Ya esta agregado en el carrito`,
                showConfirmButton: true,
            })
        }
    }

    const isInCart = (id)=> {
        return carrito.some( prod => prod.item.id === id);
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