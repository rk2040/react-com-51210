import './ItemDetail.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ( {id, nombre, precio, img, descripcion, idCat, stock} ) => {
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
                <h2 className='dataDetail'>{nombre} </h2>
                <h3 className='dataDetail'>Precio: $ {precio} </h3>
                <h3>Categoria: {idCat}</h3>
                <h3>ID: {id} </h3>
                <p> {descripcion} </p>
                {
                    addCantidad > 0 ? (<Link  className='btnAddCarrito' to='/cart'> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} onAdd={handlerCantidad} />)
                }
                <Link  className='btnAddCarrito' to='/'> Seguir Viendo </Link>
            </div>
        </div>
    )
}

export default ItemDetail