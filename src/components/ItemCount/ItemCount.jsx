import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({inicial, stock, onAdd}) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = ()=> {
        if(contador < stock){
            setContador(contador +1);
        }
    }

    const decrementar = ()=> {
        if(contador > inicial){
            setContador(contador -1);
        }
    }

    return (
        <>
        <div className='contador'>
            <button className='btnContador' onClick={ decrementar }> - </button>
            <strong> {contador} </strong>
            <button className='btnContador' onClick={ incrementar }> + </button>
        </div>
            <button className='btnAddCarrito' onClick={()=> onAdd(contador)}> Agregar al Carrito </button>
        </>
    )
}

export default ItemCount