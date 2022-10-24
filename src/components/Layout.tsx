import HeaderComponent from "./Header";
import React from "react";
import {Outlet} from "react-router-dom";
import FavoritesComponent from "./Favorites";


const Layout = () => {
    return (
        <>
            <HeaderComponent/>
            <div className="container">
                <FavoritesComponent/>
                <Outlet/>
            </div>
        </>
    )
}

export default Layout;