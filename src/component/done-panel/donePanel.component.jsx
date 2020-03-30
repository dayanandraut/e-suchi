import React from 'react'
import ItemList from '../item-list/itemList.component';

let DonePanel = ({key, items}) =>(
    <div>
        <h1>DONE </h1>
        <ItemList key={key} items={items}/>
    </div>
    
)

export default DonePanel;