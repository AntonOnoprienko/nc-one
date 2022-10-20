import React, {useEffect, useState} from 'react';
import {IProduct} from "../models/IProduct";
import ProductComponent from "./Product";
import {getAllProducts} from "../api/api";
import {FixedSizeList} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const CatalogComponent = () => {
    console.log('render catalog component')
    const [products, setProducts] = useState(Array<IProduct>)
    useEffect(() => {
        getAllProducts(setProducts)
    }, [])
    return (
            <div className='первый див' style={{width: '100%', height: '100vh'}}>
                <AutoSizer className='autosizer'>
                    {({width, height}):any => (
                        <FixedSizeList className='List'  layout='horizontal' itemSize={360} height={height} itemCount={products.length} width={width} style={{position: 'static',display:'flex',flexWrap:'wrap'}}>
                            {({index,style}:any) => {
                                return (
                                    <div style={style} className='оболочка' >
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