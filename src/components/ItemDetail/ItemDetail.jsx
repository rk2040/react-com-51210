import { useState } from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom';

const ItemDetail = ( {id, nombre, precio, img, descripcion} ) => {
    //1- Creamos un estado con la cantidad de productos agregados.
    const [addCantidad, setAddCantidad] = useState(0);

    //2- Creamos una funcion manejadora de la cantidad.
    const handlerCantidad = (cantidad)=> {
        setAddCantidad(cantidad);
        console.log("Productos agregados: " + cantidad);
    }
    return (
        <div className='contenedorItem'>
            <img className='imgDetail' src={img} alt={nombre} />
            <div className='infoDetail'>
                <h2>{nombre} </h2>
                <h3>Precio: $ {precio} </h3>
                <h3>ID: {id} </h3>
                <p> {descripcion} </p>
            </div>
        </div>
    )
}

export default ItemDetail