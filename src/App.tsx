import React from 'react';
import HeaderComponent from "./components/Header";
import CartComponent from "./components/Favorites";
import CatalogComponent from "./components/Catalog";
import './App.scss';


function App() {
  return (
    <div className="App">

     <HeaderComponent/>
        <div className="container">
            <CartComponent />
            <CatalogComponent />
        </div>

    </div>
  );
}

export default App;
