import React from "react";
import "./NavBar.css";
import CardWidget from "../CardWiget/CardWidget";

const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Scaloneta</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Equipo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Titulos</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Tienda</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Camisetas</a></li>
                                    <li><a className="dropdown-item" href="#">Shorts</a></li>
                                    <li><a className="dropdown-item" href="#">Gorros</a></li>
                                    <li><a className="dropdown-item" href="#">Toda la tienda</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <CardWidget />
        </header>
    );
};

export default NavBar;
