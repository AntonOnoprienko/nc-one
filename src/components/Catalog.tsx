import React, {useEffect} from 'react';
import {dispatch, useStoreState} from "../store/state";
import axios from "axios";
import {IProduct} from "../models/IProduct";
import ProductComponent from "./Product";
import {FixedSizeList} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const CatalogComponent = () => {
   const products = useStoreState('products')

    useEffect(() => {
        axios.get(`https://testbackend.nc-one.com/image`)
            .then(res => {
                    const arr: IProduct[] = res.data;
                dispatch({type:'setProducts',payload:arr})
                }
            )

    }, [])
    return (
// <div className='catalog__inner'>
//     {products.map(p => <ProductComponent name={p.name} price={p.price} src={p.src} key={p.id}/>)}
//
//
// </div>
        <div style={{width: '100%', height: '100vh'}}>
            <AutoSizer>
                {({width, height}):any => (
                    <FixedSizeList layout='vertical' itemSize={360} height={height} itemCount={products.length} width={width}>
                        {({index,style}) => {
                            return (
                                <div style={style} >
                                    { <ProductComponent
                                        name={products[index].name}
                                        price={products[index].price}
                                        src={products[index].src}
                                        key={products[index].id} /> }
                                </div>
                            )
                        }}
                    </FixedSizeList>
                )}
            </AutoSizer>
        </div>
    )

}
export default CatalogComponent