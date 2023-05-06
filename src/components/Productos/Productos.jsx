/* import { useState, useEffect } from "react";
import { db } from "../../services/firebase/config";
//import './Productos.css'
import { collection, doc, query, updateDoc, onSnapshot } from "firebase/firestore";

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        //Creamos una consulta a la colección "productos"
        const q = query(collection(db, "productos"));

        //onSnapShot es una función que escucha los cambios en la consulta. 

        const modificar = onSnapshot(q, function (querySnapShot) {
            const docs = [];
            querySnapShot.forEach(function (doc) {
                docs.push({ id: doc.id, ...doc.data() });
            });
            setProductos(docs);
        });

        return () => {
            modificar();
        };
    }, []);

    ///Función para bajar el stock cuando el usuario compra: 
    const manejadorCompra = (id, stock) => {
        if (stock > 0) {
            const productoRef = doc(db, "productos", id);
            updateDoc(productoRef, {
                stock: stock - 1,
            })
                //updateDoc me actualiza el documento. 
                .then(() => {
                    console.log("El stock se actualizó correctamente");
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    return (
        <div className="productos">
            {
                productos.map((producto) => (
                    <div className="producto" key={producto.id}>
                        <h2> Nombre: {producto.nombre} </h2>
                        <p> Precio: {producto.precio} </p>
                        <p> Stock: {producto.stock} </p>
                        <button onClick={() => manejadorCompra(producto.id, producto.stock)}> Compra </button>
                    </div>
                ))
            }

        </div>
    )
}

export default Productos
 */

/* //Importamos los Hooks que vamos a utilizar.
import { useState, useEffect } from 'react'


import { getDocs, collection, query, where } from 'firebase/firestore'
//Importamos las funciones que vamos a utilizar:
//Recuerden en Firestore las colecciones tienen documentos en su interior.
    //Array tiene objetos   /   Colecciones tiene documentos.        
//La funcion collection: me permite obtener una coleccion.
//getDocs: me permite obtener los documentos de una coleccion.
//query:la uso cuando quiero generar una consulta.
//where: la uso para agregar filtros a mis consultas.

import { db } from '../../services/firebase/config';
//Importamos el Obj que tiene mi configuracion para conectarme a la base de datos.

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect( ()=> {
        const misProductos = query(collection(db, 'productos'), where('precio', '<',12000));

        getDocs(misProductos)
            .then( (respuesta)=> {
                setProductos(respuesta.docs.map( (doc)=> ( {id: doc.id, ...doc.data()} ) ));
                //Creo un nuevo Array que contenga los datos del producto y ademas el id.
            })
        //getDocs me retorna una promesa.
    }, []);
        
        return (

        <div>
            <h2>Productos</h2>
            {
                productos.map( (producto)=> (
                    <div key={producto.id}>
                        <h2> {producto.nombre} </h2>
                        <p>Precio: ${producto.precio}</p>
                        <p>Stock: {producto.stock}</p>
                        <p>Descripcion: {producto.descripcion}</p>
                        <button> Agregar al Carrito </button>
                    </div>
                ))
            }
        </div> 
        
        
    )
} 

export default Productos
*/