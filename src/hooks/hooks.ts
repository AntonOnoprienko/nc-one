import {useParams} from "react-router-dom";
import {actionCreator} from "../store/store";
import {IProduct} from "../types/IProduct";


export const useParamsInt = (key = 'id') => {
    const params = useParams();
    return params[key] ? parseInt(params[key] as string) : null;
};
export const useFinder = (arr:IProduct[],value:number) => {
    arr.find(product => product.id === value)
}
export const useLikeHandler = (condition:boolean,id:number | null) => {
    if (condition) {
        actionCreator('addToFavorites',id)
    } else {
        actionCreator('removeFromFavorites',id)
    }
}