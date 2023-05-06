import './ItemDetail.css';
import { useState, useContext } from 'react'; // useContext en clase 11
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

import { CarritoContext } from '../../context/CarritoContext'; //clase 11

const ItemDetail = ( {id, nombre, precio, img, descripcion, idCat, stock} ) => {
    //1- Creamos un estado con la cantidad de productos agregados.
    const [addCantidad, setAddCantidad] = useState(0);

    //Uso Hook useContext para traer las funciones que necesitamos. clase 11
    const {addToCart} = useContext(CarritoContext);

    //2- Creamos una funcion manejadora de la cantidad.
    const handlerCantidad = (cantidad)=> {
        setAddCantidad(cantidad);
        //console.log("Productos agregados: " + cantidad); clase 11 ya no lo necesitamos
        // Creo un obj con el item y la cantidad. clase 11
        const item = {id, nombre, precio, img};
        addToCart(item, cantidad);
    }

    return (
        <div className='contenedorItem'>
            <img className='imgDetail' src={img} alt={nombre} />
            <div className='infoDetail'>
                <h2 className='dataDetail'>{nombre} </h2>
                <h3 className='dataDetail'>Precio: ${precio} </h3>
                <h4>Categoria: {idCat}</h4>
                <h4>ID: {id} </h4>
                <h4>Stock: {stock}</h4>
                <p className='pDescripcion'>Descripcion: {descripcion} </p>
                {
                    addCantidad > 0 ? (<Link  className='btnAddCarrito' to='/cart'> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} onAdd={handlerCantidad} />)
                }
                
                <Link  className='btnAddCarrito' to='/tienda'> Seguir Viendo </Link>
            </div>
        </div>
    )
}

export default ItemDetail