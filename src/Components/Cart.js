import React from "react";
import './Component.css';

const Cart = (props) => {

    return(
        <div id='TheCart'>
            {props.cart}
            <p>Total: {props.price}</p>
        </div>
    );
}; 

export default Cart;