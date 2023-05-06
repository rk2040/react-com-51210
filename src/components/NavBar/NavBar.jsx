import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWiget/CartWidget";

import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    const imgLogo = "../img/logoNav.png";

    const tienda = "../img/iconTienda.png"
    const perro = "../img/iconPerro.png"
    const gato = "../img/iconGato.png"
    const veterinaria = "../img/iconVeterinaria.png"

    return (
        <header>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <div className="logoYTexto">
                        <Link to='/'> <img className="imgLogo" src={imgLogo} alt="Logo" /> </Link>
                        <Link className="textLogo" to='/'>CatDog Pets</Link>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            
                            <li className="nav-item">
                                <Link to={`/tienda`}><img className="icon" src={tienda} alt="" /></Link>
                                <NavLink className="nav-link" to={`/tienda`}>Tienda</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link to={`/categoria/gato`}><img className="icon" src={gato} alt="" /></Link>
                                <NavLink className="nav-link" to={`/categoria/gato`}>Gatos</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link to={`/categoria/perro`}><img className="icon" src={perro} alt="" /></Link>
                                <NavLink className="nav-link" to={`/categoria/perro`}>Perros</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link to={`/veterinaria`}><img className="icon" src={veterinaria} alt="" /></Link>
                                <NavLink className="nav-link" to={`/veterinaria`}>Veterinaria</NavLink>
                            </li>
                        </ul>
                    </div>
                    
                    <CartWidget />

                </div>
            </nav>

        </header>
    );
};

export default NavBar;
