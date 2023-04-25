import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWiget/CartWidget";

import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    const imgLogo = "../img/logoNav.png";

    return (
        <header>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <Link to='/'> <img className="imgLogo" src={imgLogo} alt="Logo" /> </Link>
                    <Link className="textLogo" to='/'>CatDog Pets</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            
                            <li className="nav-item">
                            <NavLink className="nav-link" to={`/tienda`}>Tienda</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to={`/categoria/gato`}>Productos para Gatos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={`/categoria/perro`}>Productos para Perros</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={`/veterinaria`}>Veterinaria</NavLink>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Tienda</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <NavLink to={`/tienda`}>Todos los Productos</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={`/categoria/gato`}>Productos para Gatos</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={`/categoria/perro`}>Productos para Perros</NavLink>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>

                    <CartWidget />

                </div>
            </nav>

        </header>
    );
};

export default NavBar;
