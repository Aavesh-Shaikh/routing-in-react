import React from "react";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products"
import {Route , Redirect} from "react-router-dom"
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";



function App() {
  return (

   
    <div>
      <MainHeader/>

      <main>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/welcome"></Redirect>
      </Route>
     <Route path="/welcome">
      <Welcome />
     </Route>

     <Route path="/products" exact>
      <Products/>
     </Route>

    <Route path="/products/:productId">
      <ProductDetail/>
    </Route>
    </Switch>

     </main>
    </div>
   
  );
}

export default App;
