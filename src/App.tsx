import React from 'react';
import CatalogComponent from "./components/Catalog";
import './App.scss';
import InfoComponent from "./components/InfoComponent";
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";


function App() {
    return (
        <div className="App">
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route index element={<CatalogComponent/>}/>
                        <Route path="details/:id" element={<InfoComponent/>}/>
                        <Route path="*"/>
                    </Route>
                </Routes>
        </div>
    )
        ;
}

export default App;
