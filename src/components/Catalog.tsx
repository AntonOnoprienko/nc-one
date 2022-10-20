import React, {useEffect, useState} from 'react';
// import ProductComponent from "./Product";
import axios from "axios";
import {IProduct} from "../models/IProduct";
import ProductComponent from "./Product";


const CatalogComponent = () => {
    const [products,setProducts] = useState(Array<IProduct>)
    useEffect(() => {
        axios.get(`https://testbackend.nc-one.com/image`)
            .then(res => {
                const arr: IProduct[] = res.data;
                setProducts(arr)
            })
    }, [])
    return (
        <div className='catalog__inner'>
        {products.map(product => <ProductComponent name={product.name } key={product.id} src={product.src}
            price={product.price}/> )}
                </div>
                )
            }
            export default CatalogComponent