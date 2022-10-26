import {IProduct} from "../types/IProduct";
import {dispatch} from "./store";

export enum Actions {
    setProducts = 'setProducts',
    addProduct= 'addToFavorites',
removeProduct = 'removeFromFavorites',
}
export interface IAction {
    type: string,
    payload: any
}

export const actionDispatcher = (action:string,actionPayload:number | null | Array<IProduct>) => {
    dispatch({type: action, payload: actionPayload})
}