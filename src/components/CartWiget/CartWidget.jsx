import React from "react";
import "./CartWidget.css";

const CartWidget = () => {
    const imgCarrito = "https://www.seekpng.com/png/full/231-2317179_shopping-cart-icon-transparent-background-shopping-cart-icon.png";
    return (
        <div className="contenedorCarrito">
            <img className="imgCarrito" src={imgCarrito} alt="carrito" />
            <strong>3</strong>
        </div>
    );
};

export default CartWidget;
