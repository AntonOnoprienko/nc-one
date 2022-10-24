import React, {useEffect} from 'react';
import {dispatch, useStoreState} from "../store/store";
import axios from "axios";
import {IProduct} from "../models/IProduct";
import ProductComponent from "./Product";
import {FixedSizeGrid as Grid} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const CatalogComponent = () => {

    const products = useStoreState('products')
    const columnCount: number = 4;
    const columnWidth: number = 292;
    const columnHeight: number = 420;



    useEffect(() => {
        axios.get(`https://testbackend.nc-one.com/image`)
            .then(res => {
                    const arr: IProduct[] = res.data;
                    dispatch({type: 'setProducts', payload: arr})
                }
            )

    }, [])
    return (

        <div style={{width: '100%', height: '100vh'}}>
            <AutoSizer>
                {({width, height}): any => (
                    <Grid
                        height={height}
                        width={width}
                        columnWidth={columnWidth}
                        rowHeight={columnHeight}
                        rowCount={products.length / columnCount}
                        columnCount={columnCount}
                        useIsScrolling={false}
                        style={{}}>

                        {({style, columnIndex, rowIndex}) => {
                            const currentElement = products[columnCount * rowIndex + columnIndex]
                            return (
                                <div style={style} className='webkit'>
                                    <ProductComponent
                                        product={currentElement}
                                    />
                                </div>
                            )
                        }}
                    </Grid>
                )}
            </AutoSizer>
        </div>
    )

}
export default CatalogComponent