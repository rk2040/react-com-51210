/* 
import { useState, useEffect, useContext } from "react";
import { db } from "../../services/firebase/config";
import { collection, doc, query, updateDoc, onSnapshot } from "firebase/firestore";

import { CarritoContext } from '../../context/CarritoContext'

const CheckoutForm = ()=> {
    const [productos, setProductos] = useState([]);
    const {carrito} = useContext(CarritoContext);

    useEffect( ()=> {
        const q = query(collection(db, "productos"));

        const modificar = onSnapshot(q, function(querySnapShot) {
            const docs = [];
            querySnapShot.forEach(function (doc) {
                docs.push( {id: doc.id, ...doc.data()} );
            });
            setProductos(docs);
        });

        return ()=> modificar();
    }, []);

    const handleCompra = (id, stock)=> {
        const procutoId = carrito.find(item => item.id === id)
        if(stock > procutoId.cantidad){
            const productoRef = doc(db, "productos", id);
            updateDoc(productoRef, {
                stock: stock - procutoId.cantidad
            })
                .then( ()=> {
                    console.log("El stock se actualizo correctamente.")
                })
                .catch( (error)=> {
                    console.log(error);
                })
        }
    }
    return (
        <div>
        {
            
                <button onClick={() => handleCompra(productoId.id, producto.stock)}> Compra </button>
        }
        </div>
    )

}
export default CheckoutForm */


/* import './CheckoutForm.css'
import { useState } from 'react'

const CheckoutForm = ({ onComfirm }) => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')

    const handleForm = (event)=> {
        event.preventDefault();

        const userData = {
            nombre, apellido, telefono, email
        }

        onComfirm(userData);
    }

    return (
        <div className='contenedor'Form>
            <form onSubmit={handleForm} className='manejadorForm'>
                <label className="Label"> Nombre </label>
                <input type="text" className='Input' value={nombre} onChange={(event)=> setNombre(event.target.value)} />
                
                <label className="Label"> Apellido </label>
                <input type="text" className='Input' value={apellido} onChange={(event)=> setApellido(event.target.value)} />

                <label className="Label"> Telefono </label>
                <input type="number" className='Input' value={telefono} onChange={(event)=> setTelefono(event.target.value)} />

                <label className="Label"> Email </label>
                <input type="email" className='Input' value={email} onChange={(event)=> setEmail(event.target.value)} />

                <button className='btnOrden'> Crear Orden </button>
            </form>
        </div>
    )
}

export default CheckoutForm
 */