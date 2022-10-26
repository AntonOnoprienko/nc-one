import React from 'react';
import classes from '../styles/favorites.module.scss'
import {useStoreState} from "../store/store";
import FavoriteItemComponent from "./FavoriteItem"



const FavoritesComponent = () => {
    const favorites = useStoreState('favorites')
    return (
        <div className={classes.favorites__inner}>
            <p className={classes.favorites__title}>
                Favorites
            </p>
            <div className={classes.favorites__list}>
                {favorites.map(product => <FavoriteItemComponent product={product} key={product.id} />)}
            </div>
        </div>
    )
}
export default FavoritesComponent;