//import React from 'react';
import './ItemListContainer.css'
import { useState, useEffect } from 'react';
//import {getProducts, getProductosPorCategoria} from '../../asyncmock';
import ItemList from '../ItemList/ItemList';

import { useParams } from 'react-router-dom';

//importamos nuevas funciones:
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../services/firebase/config';



const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const {idCategoria} = useParams();

    // firebase clase 13
    useEffect( ()=> {
        //setLoading(true)
        const misProductos = idCategoria ? query(collection(db, 'productos'), where('idCat', '==', idCategoria)) : collection(db, 'productos');

        getDocs(misProductos)
            .then(res=> {
                const nuevosProductos = res.docs.map(doc=> {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(nuevosProductos);
            })
            .catch(error=> console.log(error))
            // .finally( ()=> {
            //     setLoading(false)
            // })
    }, [idCategoria]);

/* 
    usEffect antes de firebase

    useEffect( ()=> {

        const funcionProductos = idCategoria ? getProductosPorCategoria : getProducts;


        funcionProductos(idCategoria)
            .then(response => setProducts(response) )
            .catch(error => console.error(error) )

    }, [idCategoria]) */

    return (
        <>
            <ItemList products={products}/>
        </>
    )
};

export default ItemListContainer;
