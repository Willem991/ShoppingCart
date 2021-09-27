import React from "react";
import './Component.css'

const Product = (props) => {
    return(
        <div id = 'Product'>
            <img src = {props.image} alt='product'/>
            <h4>{props.name}</h4>
            <button id='minus'onClick = {props.NupdateCount} >-</button>
            <p>{props.counter}</p>
            <button id='plus' onClick = {props.updateCount} >+</button>
            <p>{props.price*props.counter}</p>
            <button id='add'>Add to Cart</button>
        </div>
    );
};

const Products = (props) => {

    return(
        <div id='ProductDisplay'>
            <Product
            image = {props.image1}
            name = {props.name1}
            counter = {props.counter1}
            price = {props.price1}
            updateCount = {props.updateCount1}
            NupdateCount = {props.NupdateCount1}
            ></Product>
            <Product
            image = {props.image2}
            name = {props.name2}
            counter = {props.counter2}
            price = {props.price2}
            updateCount = {props.updateCount2}
            NupdateCount = {props.NupdateCount2}
            ></Product>
            <Product
            image = {props.image3}
            name = {props.name3}
            counter = {props.counter3}
            price = {props.price3}
            updateCount = {props.updateCount3}
            NupdateCount = {props.NupdateCount3}
            ></Product>
            <Product
            image = {props.image4}
            name = {props.name4}
            counter = {props.counter4}
            price = {props.price4}
            updateCount = {props.updateCount4}
            NupdateCount = {props.NupdateCount4}
            ></Product>
            <Product
            image = {props.image5}
            name = {props.name5}
            counter = {props.counter5}
            price = {props.price5}
            updateCount = {props.updateCount5}
            NupdateCount = {props.NupdateCount5}
            ></Product>
            <Product
            image = {props.image6}
            name = {props.name6}
            counter = {props.counter6}
            price = {props.price6}
            updateCount = {props.updateCount6}
            NupdateCount = {props.NupdateCount6}
            ></Product>
        </div>
    );
};

export default Products;