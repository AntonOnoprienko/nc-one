import {IProduct} from "../models/IProduct";
import {createStore} from 'react-hooks-global-state';

interface IState {
    products: IProduct[]
    favorites: IProduct[]
}

interface IAction {
    type: string,
    payload: any
}

const initialState: IState = {
    products: [],
    favorites: [],
};

const reducer = (state = initialState, action: IAction): IState => {
    switch (action.type) {
        case 'setProducts':
            return {...state, products: state.products = action.payload}

        case 'addToFavorites':
            const product = state.products.find(p => p.id === action.payload)
            return {...state, favorites: product? [...state.favorites, product] : state.favorites}

        case 'removeFromFavorites':
            return {...state, favorites: state.favorites.filter(
                (product: IProduct) => product.id !== action.payload)}
        default:
            return state;
    }
}
    ;
    export const {dispatch, useStoreState} = createStore(reducer, initialState);
