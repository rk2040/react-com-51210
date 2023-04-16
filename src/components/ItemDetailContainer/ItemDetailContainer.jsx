import React from 'react'
import { getUnProducto } from '../../asyncmock'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [producto, setProduct] = useState(null);

    const {idItem} = useParams();

    useEffect( ()=> {
        getUnProducto(idItem)
            .then(res => setProduct(res))
            .catch(error => console.error(error))
            
    }, [idItem])

    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer