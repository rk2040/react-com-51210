import React from 'react'
import './PaginaHome.css'
import { Link } from 'react-router-dom';

const PaginaHome = () => {
    const homeGato = '../img/homeGato.jpg';
    const homePerro = '../img/homePerro.jpg';
    const homeTienda = '../img/homeTienda.jpg';
    const homeVeterinaria = '../img/homeVeterinaria.jpg';

    return (
        <div className='contenedorHome'>
            <div className='contenedorImgHome'>
                <div className='cuadroImg'>
                    <Link className='imgPet' to='/tienda'> <img src={homeTienda} alt="Tienda" />
                    <h2 className='textoImgHome'>Toda la Tienda</h2> </Link>
                </div>
                <div className='cuadroImg'>
                    <Link className='imgPet' to='/categoria/gato'> <img src={homeGato} alt="Gatito jugueton" />
                    <h2 className='textoImgHome'>Prod. para gatos</h2> </Link>
                </div>
                <div className='cuadroImg'>
                    <Link className='imgPet' to='/categoria/perro'> <img src={homePerro} alt="Perrito jugueton" />
                    <h2 className='textoImgHome'>Prod. para perros</h2> </Link>
                </div>
                <div className='cuadroImg'>
                    <Link className='imgPet' to='/veterinaria'> <img src={homeVeterinaria} alt="Veterinaria" /> 
                    <h2 className='textoImgHome'>Veterinaria</h2> </Link>
                </div>
            </div>
        </div>
    )
}

export default PaginaHome