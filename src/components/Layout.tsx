import HeaderComponent from "../header/ComponentHeader";
import React from "react";
import {Outlet} from "react-router-dom";
import FavoritesComponent from "./Favorites/ComponentFavorites";


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