import './Checkout.css'
import { useState, useContext, useEffect } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { db } from '../../services/firebase/config'
import { Timestamp, addDoc, doc, collection, query, updateDoc, onSnapshot } from 'firebase/firestore'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'

const Checkout = () => {
    const {carrito, emptyCart} = useContext(CarritoContext);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmacion, setEmailConfirmacion] = useState('');

    const [ordenId, setOrdenId] = useState('');
    const [error, setError] = useState('');

    const btnComprar = <button className='btnComprar' type='submit'> Finalizar Compra </button>
    const btnSeguirViendo = <Link className='linkBtnCarrito' to='/tienda'> Seguir Viendo </Link>
    const [verificado, setVerificado] = useState(true);

    // Bajar stock ================================
    const [stockProductos, setStockProductos] = useState([]); 
    useEffect( ()=> {
        const q = query(collection(db, "productos"));

        const modificaStock = onSnapshot(q, function(querySnapShot) {
            const docs = [];
            querySnapShot.forEach(function (doc) {
                docs.push({ id: doc.id, ...doc.data() });
            });
            setStockProductos(docs);
        });
        return ()=> { modificaStock() }
    }, []);

    const descuentaStock = (id, cantidad)=> {
        const productoref = doc(db, "productos", id)
        const productoAux = stockProductos.find(prod => prod.id === id)

        if(productoAux){
            updateDoc(productoref, { stock: productoAux.stock - cantidad })
                .then( ()=> console.log(`Se compro: ${productoref}`))
                .catch( (error)=> console.log(error))
        }
    }
    // Bajar stock ================================

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

        orden.items.map(prod => (descuentaStock(prod.id, prod.cantidad)));

        if(orden.items < 1){    // Compruebo si hay hay productos en en pepido para generar la orden
            setError("Su carrito esta vacio.")
            console.log("Su carrito esta vacio.")
            return;
        }
        //Guardamos la orden en la BBDD
        //const confirmarOrden = ()=> {   // Agregue funcion confirmarOrden para usarla con validadores de cantidad de stock y demas
        addDoc(collection(db, "ordenes"), orden)
            .then( (docRef)=> {
                setOrdenId(docRef.id);

                Swal.fire({
                    icon: 'success',
                    title: `${nombre} gracias por tu compra. Tu número de orden es: ${docRef.id}`
                    })

                setVerificado(false);
                emptyCart();
            })
            .catch( (error)=> {
                console.log("Error al crear la orden.", error);
                setError("Se produjo un error al generar la orden.");

                Swal.fire({
                    icon: 'error',
                    title: 'Se produjo un error al generar la orden.',
                    })
            })
            
        setNombre("");
        setApellido("");
        setTelefono("");
        setTelefono("");
        setEmail("");
        setEmailConfirmacion("");

        setError("");
    }

    return (
        <div>
            <h2 className='checkoutFomr'> Checkout </h2>
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
                    <label className='labelForm' htmlFor="">Nombre</label>
                    <input className='inputForm' type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)} placeholder='Tu nombre'/>

                    <label className='labelForm' htmlFor="">Apellido</label>
                    <input className='inputForm' type="text" value={apellido} onChange={(e)=> setApellido(e.target.value)} placeholder='Tu apellido'/>

                    <label className='labelForm' htmlFor="">Telefono</label>
                    <input className='inputForm' type="number" value={telefono} onChange={(e)=> setTelefono(e.target.value)} placeholder='41234567'/>

                    <label className='labelForm' htmlFor="">Email</label>
                    <input className='inputForm' type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='tuemail@email.com'/>

                    <label className='labelForm' htmlFor="">Confirmar Email</label>
                    <input className='inputForm' type="email" value={emailConfirmacion} onChange={(e)=> setEmailConfirmacion(e.target.value)} placeholder='tuemail@email.com'/>
                </div>
                {error && <p style={{color:'red'}} > {error} </p>}

                { verificado ? btnComprar : btnSeguirViendo }
            </form>
            {
                ordenId && (
                    <p className='numeroOrden'>Guarda tu número de orden para darle seguimiento. <br/> Tu número de orden es: <strong>{ordenId}</strong> </p>
                )
            }
        </div>
    );
}

export default Checkout; 