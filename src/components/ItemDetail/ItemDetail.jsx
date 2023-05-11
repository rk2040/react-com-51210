import './ItemDetail.css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

import { CarritoContext } from '../../context/CarritoContext';

const ItemDetail = ( {id, nombre, precio, img, descripcion, idCat, stock} ) => {
    const [addCantidad, setAddCantidad] = useState(0);

    const {addToCart} = useContext(CarritoContext);

    const handlerCantidad = (cantidad)=> {
        setAddCantidad(cantidad);
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