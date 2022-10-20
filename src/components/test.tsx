import React from 'react';
import {FixedSizeList} from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";

const items = ['waddwa', 'dwadwawadwda', 'awd', 'fefes']


const Row = ({index, style}: any) => (
    <div style={style}>
        {items[index]}
    </div>
);

const ListComponent = () => (

    <FixedSizeList
        height={500}
        width={500}
        itemSize={120}
        itemCount={items.length}
    >
        {Row}
    </FixedSizeList>

);

export default ListComponent;