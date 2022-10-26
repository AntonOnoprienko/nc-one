import {IProduct} from "../types/IProduct";
import {createStore} from 'react-hooks-global-state';
import {Actions, IAction} from "./actions";

interface IState {
    products: IProduct[]
    favorites: IProduct[]
}

const initialState: IState = {
    products: [],
    favorites: [],
};

const reducer = (state = initialState, action:IAction): IState => {
    switch (action.type) {
        case Actions.setProducts:
            return {...state, products: state.products = action.payload}

        case Actions.addProduct:
            const product = state.products.find(p => p.id === action.payload)
            return {...state, favorites: product? [...state.favorites, product] : state.favorites}

        case Actions.removeProduct:
            return {...state, favorites: state.favorites.filter(
                (product: IProduct) => product.id !== action.payload)}
        default:
            return state;
    }
}
    export const {dispatch, useStoreState} = createStore(reducer, initialState);


