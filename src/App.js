import React, { useEffect } from "react";
import { BrowserRouter ,Route, Switch } from "react-router-dom";
import Homepage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import { useState } from "react";

function App() {

  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);
  const [count4, setCount4] = useState(1);
  const [count5, setCount5] = useState(1);
  const [count6, setCount6] = useState(1);

  const [cart, setCart] = useState({})

  const price1 = 100;
  const price2 = 110;
  const price3 = 90;
  const price4 = 65;
  const price5 = 123;
  const price6 = 30;

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

  useEffect(() => {

  });

  return (
    <div id="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path = '/' component = {Homepage}/>
          <Route path = '/Products' isAuthed={true}
                render =  {(props) => <Products 
                  price1 = {price1}
                  price2 = {price2}
                  price3 = {price3}
                  price4 = {price4}
                  price5 = {price5}
                  price6 = {price6}

                  name1 = "Hi"
                  name2 = "Hi"
                  name3 = "Hi"
                  name4 = "Hi"
                  name5 = "Hi"
                  name6 = "Hi"

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
                ></Products>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
