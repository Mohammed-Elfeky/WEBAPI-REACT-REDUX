import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Nav from './COMPONENTS/nav/nav';
import CatFormEdit from './COMPONENTS/cat/catFormEdit';
import ProductFormAdd from './COMPONENTS/product/productFormAdd';
import ProductFormEdit from './COMPONENTS/product/productFormEdit';
import AllCats from './COMPONENTS/cat/AllCats';
import AllProducts from './COMPONENTS/product/AllProducts';
import CatFormAdd from './COMPONENTS/cat/catFormAdd';
import SignUp from './COMPONENTS/auth/signUp';
import SignIn from './COMPONENTS/auth/signIn';
import AllUserProducts from './COMPONENTS/product/AllUserProducts';
import Cart from './COMPONENTS/Cart';
import Err from './COMPONENTS/other/error';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<AllProducts/>}></Route>
        <Route path="/add-product" element={<ProductFormAdd/>}></Route>
        <Route path="/edit-product/:id" element={<ProductFormEdit/>}></Route>
        <Route path="/cats" element={<AllCats/>}></Route>
        <Route path="/add-cat" element={<CatFormAdd/>}></Route>
        <Route path="/edit-cat/:id" element={<CatFormEdit/>}></Route>
        <Route path="/signUp" element={<SignUp/>}></Route>
        <Route path="/signIn" element={<SignIn/>}></Route>
        <Route path="/userProducts" element={<AllUserProducts/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/error" element={<Err/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
