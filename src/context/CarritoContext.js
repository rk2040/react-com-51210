//1- Import
import { createContext, useState } from "react";
import Swal from 'sweetalert2';

//2- Creo nuevo Conetxto.
export const CarritoContext = createContext( {carrito:[]} );

//3- Creo Componente "CarritoProvider".
export const CarritoProvider = ( {children} )=> {

    //4- Creo estado local "carrito"
    const [carrito, setCarrito] = useState([]); 
    //console.log(carrito);

    //5- Agrego metodos al proveedor de contexto.

    //5 A- Funcion agregar al carrito
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
    //5 B- Funcion Aux para addToCart
    const isInCart = (id)=> {
        return carrito.some(prod => prod.item.id === id);
    }

    //5 C- Funcion eliminar producto del carrito.
    const deleteToCart = (id)=> {
        console.log("Eliminado producto id: ", id);
        console.log("carrito antes:", carrito)
        const updatedCart = carrito.filter( prod => prod.item.id !== id );
        setCarrito(updatedCart);
        console.log("carrito despues:",updatedCart);
    }

    //5 D- Funcion vaciar carrito.
    const emptyCart = ()=> {
        setCarrito([]);
    }

    //6- En el return uso componente CarritoContext.Provider, para enviar el valor actual del carrito y las funciones a los componentes que lo necesiten.
    return (
        <CarritoContext.Provider value={ {carrito, addToCart, deleteToCart, emptyCart} }>
            {children}
        </CarritoContext.Provider>
    )
    //7- Children: propiedades especiales que se utilizan para representar a todos aquellos componentes que puedan necesitar el carrito y sus metodos.
}
