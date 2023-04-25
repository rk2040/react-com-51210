import React from 'react';
import './ItemListContainer.css'
import { useState, useEffect } from 'react';
import {getProducts, getProductosPorCategoria} from '../../asyncmock';
import ItemList from '../ItemList/ItemList';

import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const {idCategoria} = useParams();


    useEffect( ()=> {

        const funcionProductos = idCategoria ? getProductosPorCategoria : getProducts;


        funcionProductos(idCategoria)
            .then(response => setProducts(response) )
            .catch(error => console.error(error) )

    }, [idCategoria])

    return (
        <>
            <ItemList products={products}/>
        </>
    )
};

export default ItemListContainer;
