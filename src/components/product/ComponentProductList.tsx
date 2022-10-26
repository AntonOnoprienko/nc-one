import React, {useEffect} from 'react';
import axios from "axios";
import {FixedSizeGrid as Grid} from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import {useStoreState} from "../../store/store";
import {IProduct} from "../../types/IProduct";
import ProductComponent from "./ComponentProduct";
import classes from './ComponentProduct.module.scss'
import {actionCreator, Actions} from "../../store/actions";


const ProductsListComponent = () => {
    const products = useStoreState('products')
    const columnCount: number = 4;
    const columnWidth: number = 292;
    const columnHeight: number = 420;
    let errorMessage: string = '';

    useEffect(() => {
        axios.get(`https://testbackend.nc-one.com/image`)
            .then(res => {
                const arr: IProduct[] = res.data;
                actionCreator(Actions.setProducts, arr)
            })
            .catch(error => {
                errorMessage = error.message
            })
    }, [])
    return (
        <div style={{width: '100%', height: '100vh'}}>
            <p>{errorMessage}</p>
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
                                <div style={style} className={classes.products__inner}>
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
export default ProductsListComponent