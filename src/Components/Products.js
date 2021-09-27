import React from "react";
import './Component.css'

const Product = (props) => {
    return(
        <div id = 'Product'>
            <img src = {props.image} alt='product'/>
            <h4>{props.name}</h4>
        </div>
    );
};

const Products = () => {

    return(
        <div id='ProductDisplay'>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    );
};

export default Products;