//import React from 'react'
//comentamos lo que no vamos a usar mas despues de firebase clase 13
//import { getUnProducto } from '../../asyncmock'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

import { useParams } from 'react-router-dom'

//importamos las nuevas funciones clase 13
import { db } from '../../services/firebase/config';
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [producto, setProduct] = useState(null);
    //const [loading, setLoading] = useState(true);

    const {idItem} = useParams();

    useEffect( ()=> {
        //setLoading(true);

        const nuevoDoc = doc(db, 'productos', idItem);

        getDoc(nuevoDoc)
            .then(res=> {
                const data =res.data();
                const nuevoProducto = {id: res.id, ...data}
                
                setProduct(nuevoProducto);
            })
            .catch(error=> console.log(error))
            // .finally( ()=> {
            //     setLoading(false);
            // })

    }, [idItem]);

/* usEffect antes de firebase

    useEffect( ()=> {
        getUnProducto(idItem)
            .then(res => setProduct(res))
            .catch(error => console.error(error))
            
    }, [idItem]) */

    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer