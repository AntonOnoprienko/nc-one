import React from 'react';
import classes from './ComponentFavorites.module.scss'
import {useStoreState} from "../../store/store";
import FavoriteItemComponent from "./ComponentFavoriteItem"



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