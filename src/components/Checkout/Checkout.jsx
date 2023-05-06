import './Checkout.css'
import { useState, useContext, useEffect } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { db } from '../../services/firebase/config'
import { Timestamp, addDoc, doc, collection, documentId, getDocs, query, updateDoc, where, writeBatch } from 'firebase/firestore'



const Checkout = () => {
    const {carrito, emptyCart} = useContext(CarritoContext);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmacion, setEmailConfirmacion] = useState('');

    const [ordenId, setOrdenId] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event)=> {
        event.preventDefault();

        //Validamos que los campos esten completos
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Complete todos los campos.");
            return;
        }
        //Validamos que el email coincida
        if(email !== emailConfirmacion){
            setError("El email no coincide.")
            return;
        }

        //Creamos el objeto de la orden
        const orden = {
            items: carrito.map( (producto)=> ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
                precio: producto.item.precio,
            })),
            total: carrito.reduce( //el total podria probar traerlo de carritoContext, para evitar hacer otra ves el mismo codigo. (probar)
                (total, producto)=> total + producto.item.precio * producto.cantidad, 0 ),
            nombre,
            apellido,
            telefono,
            email,
            fecha: Timestamp.fromDate(new Date()),
        };

        //Guardamos la orden en la BBDD
        //const confirmarOrden = ()=> {   // Agregue funcion confirmarOrden para usarla con validadores de cantidad de stock y demas
            addDoc(collection(db, "ordenes"), orden)
            .then( (docRef)=> {
                
                setOrdenId(docRef.id);
                emptyCart();
            })
            .catch( (error)=> {
                console.log("Error al crear la orden.", error);
                setError("Se produjo un error al generar la orde.");
            })
            
            setNombre("");
            setApellido("");
            setTelefono("");
            setTelefono("");
            setEmail("");
            setEmailConfirmacion("");
        //}

    }
    
    //==========================================================================================
    // Vemos como completamos esto o si usamos funciones sueltas para hacer validaciones de stock y para descontar stock de la BBDD

 //==========================================================================================


    return (
        <div>
            <h2> Checkout </h2>
            <form onSubmit={ handleSubmit }>
                {carrito.map( (producto)=> {
                    <div key={producto.item.id}>
                        <p>
                            {producto.item.nombre} x {producto.cantidad}
                            <p>Precio unitario: ${producto.item.precio} </p>
                        </p>
                        <hr/>
                    </div>
                })}
                <hr/>
                <div className='dataForm'>
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)} />

                    <label htmlFor="">Apellido</label>
                    <input type="text" value={apellido} onChange={(e)=> setApellido(e.target.value)} />

                    <label htmlFor="">Telefono</label>
                    <input type="number" value={telefono} onChange={(e)=> setTelefono(e.target.value)} />

                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />

                    <label htmlFor="">Confirmar Email</label>
                    <input type="email" value={emailConfirmacion} onChange={(e)=> setEmailConfirmacion(e.target.value)} />
                </div>
                {error && <p style={{color:'red'}} > {error} </p>}
                <button type='submit'> Finalizar Compra </button>
            </form>
            {
                ordenId && (
                    <strong>Tu compra se genero con exito. <br/> Tu numero de orden es: {ordenId} </strong>
                )
            }

            {/* <Productos/> */}
        </div>
    );
}

export default Checkout; 
