import React from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Details from "./details/ComponentDetails";
import ProductsListComponent from "./product/ComponentProductList";


const RoutesComponent = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<ProductsListComponent/>}/>
                <Route path="details/:id" element={<Details/>}/>
                <Route path="*"/>
            </Route>
        </Routes>
    )
}
export default RoutesComponent