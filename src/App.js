import React, { useState } from "react";
import ProductsList from "./components/products/ProductsList";
import ProductsItem from "./components/products/ProductsItem";
import ProductsForm from "./components/products/ProductsForm"
import "./styles/app.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CustomLink from "./components/CustomLink";

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

function App() {

  const [newProductsList, onChange] = useState([])

  function onNewProduct(product){
    console.log(product);
    onChange([...newProductsList, product])
  }
  return (
    <div>
      <BrowserRouter>
        <nav>
          <CustomLink to="/" end className="link-main">Home</CustomLink>
          <CustomLink to="/about" >About</CustomLink>
          <CustomLink to="/products">Products</CustomLink>
          
        </nav>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}></Route>
            <Route path="about" element={<About></About>}></Route>
            <Route path="products" element={<Products />}>
              <Route index element={<ProductsList newProductsList={newProductsList}/>}></Route>
              <Route path=":id" element={<ProductsItem newProductsList={newProductsList}/>}></Route>
              <Route path="new" element={<ProductsForm onNewProduct={onNewProduct}/>}></Route>
            {/* <Route path="/:id/edit" element={<Products></Products>}></Route> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <ProductsList></ProductsList> */}
    </div>
  );
}

export default App;
