import {useParams} from "react-router-dom";
import {IProduct} from "../types/IProduct";


export const useParamsInt = (key = 'id') => {
    const params = useParams();
    return params[key] ? parseInt(params[key] as string) : null;
};
export function useIdFinder (arr:IProduct[],id:number | null) {
     return arr.find(obj => obj.id === id)
}
