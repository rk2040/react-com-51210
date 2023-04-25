//1- Import
import { createContext, useState } from "react";

//2- Creo nuevo Conetxto.
export const CarritoContext = createContext( {carrito:[]} );

//3- Creo Componente "CarritoProvider".
export const CarritoProvider = ( {children} )=> {

    //4- Creo estado local "carrito"
    const [carrito, setCarrito] = useState([]); 
    console.log(carrito);

    //5- Agrego metodos al proveedor de contexto.
    //5 A- Funcion agregar al carrito
    const addToCart = (item, cantidad)=> {
        if( !isInCart(item.id) ){
            setCarrito(previo => [...previo, {item, cantidad}] );
        }
        else{
            console.log("Producto ya agregado.");
        }
    }
    //5 B- Funcion Aux para addToCart
    const isInCart = (id)=> {
        return carrito.some(prod => prod.id === id);
    }

    //5 C- Funcion eliminar producto del carrito.
    const deleteToCart = (id)=> {
        const updatedCart = carrito.filter( prod => prod.id !== id );
        setCarrito(updatedCart);
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