
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../services/firebase/config';

import Spinner from '../Spinner/Spinner';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const {idCategoria} = useParams();
    const [loading, setLoading] = useState(false);

    useEffect( ()=> {
        setLoading(true)
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
            .finally( ()=> {
                setLoading(false)
            })
    }, [idCategoria]);

    return (
        <>
            {
                loading ? <Spinner/> : <ItemList products={products}/>
            }
        </>
    )
};

export default ItemListContainer;