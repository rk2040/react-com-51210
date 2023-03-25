import React from "react";
import "./CardWidget.css";

const CardWidget = () => {
    const imgCarrito =
        "https://cdn-icons-png.flaticon.com/512/1050/1050986.png";
    return (
        <div className="contenedorCarrito">
            <img className="imgCarrito" src={imgCarrito} alt="carrito" />
            <strong>3</strong>
        </div>
    );
};

export default CardWidget;
