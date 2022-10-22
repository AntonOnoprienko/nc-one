import React from 'react';
import '../App.scss'
import {useStoreState} from "../store/state";
import FavoritesItemComponent from "./FavoritesItemComponent";



const FavoritesComponent = () => {
    const favorites = useStoreState('favorites')
    return (
        <div className="favorites__inner">
            <p className='favorites__title'>
                Favorites
            </p>
            <div className='favorites__list'>
                {favorites.map(product => <FavoritesItemComponent name={product.name} price={product.price}
                                                                  src={product.src} key={Math.random()}/>)}
            </div>
        </div>
    )
}
export default FavoritesComponent;