import React from "react";
import { BrowserRouter ,Route, Switch } from "react-router-dom";
import Homepage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path = '/' component = {Homepage}/>
          <Route path = '/Products' component = {Products} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
