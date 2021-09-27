import React from "react";

const Cart = (props) => {
    console.log(props.cart);

    return(
        <div>
            {props.cart}
            <p>Total: {props.price}</p>
        </div>
    );
}; 

export default Cart;