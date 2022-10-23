import React from 'react';
import HeaderComponent from "./components/Header";
import CartComponent from "./components/Favorites";
// import CatalogComponent from "./components/Catalog";
import './App.scss';
import InfoComponent from "./components/InfoComponent";


function App() {
  return (
    <div className="App">

     <HeaderComponent/>
        <div className="container">
            <CartComponent />
            {/*<CatalogComponent />*/}
            <InfoComponent id={6} name={"Shloimys Sprinkles Cookies Shloimys Sprinkles Cookies"} price={8.99} src={"/static/1665003905322.jpeg"} />
        </div>

    </div>
  );
}

export default App;
