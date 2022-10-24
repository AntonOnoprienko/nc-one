import React from 'react';
import '../App.scss'
import {useStoreState} from "../store/store";
import FavoritesItemComponent from "./FavoritesItemComponent";




const FavoritesComponent = () => {
    const favorites = useStoreState('favorites')
    return (
        <div className="favorites__inner">
            <p className='favorites__title'>
                Favorites
            </p>

            <div className='favorites__list'>
                {favorites.map(product =>
                        <FavoritesItemComponent product={product} key={product.id} />
                            )
                    }
            </div>
        </div>
    )
}
export default FavoritesComponent;