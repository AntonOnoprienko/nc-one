import React from 'react';
import '../App.scss'
import {useStoreState} from "../store/store";
import FavoritesItemComponent from "./FavoritesItemComponent";
import {Link } from "react-router-dom";



const FavoritesComponent = () => {
    const favorites = useStoreState('favorites')
    return (
        <div className="favorites__inner">
            <p className='favorites__title'>
                Favorites
            </p>

            <div className='favorites__list'>
                {favorites.map(product =>
                    <Link key={product.id} to={`details/${product.id}`} >
                        <FavoritesItemComponent
                            name={product.name}
                            price={product.price}
                            id={product.id}
                            src={product.src}
                            key={Math.random()}/>
                    </Link>)
                    }
            </div>
        </div>
    )
}
export default FavoritesComponent;