
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

import { useParams } from 'react-router-dom'

import { db } from '../../services/firebase/config';
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [producto, setProduct] = useState(null);

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

    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer