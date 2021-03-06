import React, { useEffect } from "react";
import { BrowserRouter ,Route, Switch } from "react-router-dom";
import Homepage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import { useState } from "react";
import Cart from "./Components/Cart";

import Pie1 from './Components/Images/Pie11.png';
import Pie2 from './Components/Images/Pie21.png';
import Pie3 from './Components/Images/Pie31.png';
import Pie4 from './Components/Images/Pie41.png';
import Pie5 from './Components/Images/Pie51.png';
import Pie6 from './Components/Images/Pie61.png';

function App() {

  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);
  const [count4, setCount4] = useState(1);
  const [count5, setCount5] = useState(1);
  const [count6, setCount6] = useState(1);

  const [cart, setCart] = useState([])
  const [cartDisplay, setCartDisplay] = useState([]);
  const [btnPressed, setBtnPressed] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const price1 = 100;
  const price2 = 110;
  const price3 = 90;
  const price4 = 65;
  const price5 = 123;
  const price6 = 30;

  const name1 = 'Beefy Surprise';
  const name2 = 'Mutton Muncher';
  const name3 = 'Chicken Chomper';
  const name4 = 'The Big Cornish';
  const name5 = 'Ye Olde Sausage';
  const name6 = 'Ode to Pie';

  //SetState Functions

    //Updating Product Count Functions

  const updateCount1 = () =>{
    setCount1(count1 + 1);
  };

  const updateCount2 = () =>{
    setCount2(count2 + 1);
  };

  const updateCount3 = () =>{
    setCount3(count3 + 1);
  };

  const updateCount4 = () =>{
    setCount4(count4 + 1);
  };

  const updateCount5 = () =>{
    setCount5(count5 + 1);
  };

  const updateCount6 = () =>{
    setCount6(count6 + 1);
  };

  const negUpdateCount1 = () =>{
    if(count1 > 1){
      setCount1(count1 -1)
    };
  };

  const negUpdateCount2 = () =>{
    if(count2 > 1){
      setCount2(count2 -1)
    };
  };

  const negUpdateCount3 = () =>{
    if(count3 > 1){
      setCount3(count3 -1)
    };
  };

  const negUpdateCount4 = () =>{
    if(count4 > 1){
      setCount4(count4 -1)
    };
  };

  const negUpdateCount5 = () =>{
    if(count5 > 1){
      setCount5(count5 -1)
    };
  };

  const negUpdateCount6 = () =>{
    if(count6 > 1){
      setCount6(count6 -1)
    };
  };

    //Add to Cart Functions

  const removeFromCart = (e) => {
    let indexVal = e.target.id -1
    let newCart = cart;
    newCart.splice(indexVal,1);
    setCart(newCart);
    setBtnPressed(true);
  };  

  const CartChecker = () => {
    let i = 0;

    let maxPrice = cart.reduce((mPrice, item) => {
      mPrice = mPrice + item.price*item.quantity;
      return mPrice;

    },0);

    setTotalPrice(maxPrice);

    let productArray = cart.map((item) => {
      i++
      return (<div id='CartProduct' key = {i}>
                <p>Item: {item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price*item.quantity}</p>
                <button id = {i} onClick = {(e) => {removeFromCart(e);}}>Remove</button>
              </div>)
    });
  
    setCartDisplay(productArray);

  };   

  const addToCart1 = () => {
    let theCart = cart.concat({name: name1, price: price1, quantity: count1});
    setCart(theCart);
    setBtnPressed(true);
  };

  const addToCart2 = () => {
    let theCart = cart.concat({name: name2, price: price2, quantity: count2})
    setCart(theCart);
    setBtnPressed(true);
  };

  const addToCart3 = () => {
    let theCart = cart.concat({name: name3, price: price3, quantity: count3})
    setCart(theCart);
    setBtnPressed(true);
  };

  const addToCart4 = () => {
    let theCart = cart.concat({name: name4, price: price4, quantity: count4})
    setCart(theCart);
    setBtnPressed(true);
  };

  const addToCart5 = () => {
    let theCart = cart.concat({name: name5, price: price5, quantity: count5})
    setCart(theCart);
    setBtnPressed(true);
  };

  const addToCart6 = () => {
    let theCart = cart.concat({name: name6, price: price6, quantity: count6})
    setCart(theCart);
    setBtnPressed(true);
  };


  useEffect(() => {
    if(btnPressed === true){
      console.log(cart)
      setBtnPressed(false);
      CartChecker();
    };
  });

  return (
    <div id="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path = '/' component = {Homepage}/>
          <Route path = '/Cart' render = {() => <Cart price = {totalPrice} cart = {cartDisplay}></Cart>} />
          <Route path = '/Products' isAuthed={true}
                render =  {(props) => <Products 
                  price1 = {price1}
                  price2 = {price2}
                  price3 = {price3}
                  price4 = {price4}
                  price5 = {price5}
                  price6 = {price6}

                  image1 = {Pie1}
                  image2 = {Pie2}
                  image3 = {Pie3}
                  image4 = {Pie4}
                  image5 = {Pie6}
                  image6 = {Pie5}

                  name1 = {name1}
                  name2 = {name2}
                  name3 = {name3}
                  name4 = {name4}
                  name5 = {name5}
                  name6 = {name6}

                  counter1 = {count1}
                  counter2 = {count2}
                  counter3 = {count3}
                  counter4 = {count4}
                  counter5 = {count5}
                  counter6 = {count6}

                  updateCount1 = {updateCount1}
                  updateCount2 = {updateCount2}
                  updateCount3 = {updateCount3}
                  updateCount4 = {updateCount4}
                  updateCount5 = {updateCount5}
                  updateCount6 = {updateCount6}

                  NupdateCount1 = {negUpdateCount1}
                  NupdateCount2 = {negUpdateCount2}
                  NupdateCount3 = {negUpdateCount3}
                  NupdateCount4 = {negUpdateCount4}
                  NupdateCount5 = {negUpdateCount5}
                  NupdateCount6 = {negUpdateCount6}

                  addToCart1 = {addToCart1}
                  addToCart2 = {addToCart2}
                  addToCart3 = {addToCart3}
                  addToCart4 = {addToCart4}
                  addToCart5 = {addToCart5}
                  addToCart6 = {addToCart6}
                ></Products>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
