import {IProduct} from "../models/IProduct";
import axios from "axios";


export function getAllProducts(func: Function): Array<IProduct> | any {
    axios.get(`https://testbackend.nc-one.com/image`)
        .then(res => {
                const arr: IProduct[] = res.data;
            }
        )
}



