import React from 'react';
import ItemList from '../item-list/itemList.component';

let TodoPanel = ({key, items}) =>(
   <div>
    <h1>TODO </h1>
    <ItemList key={key} items={items}/>
   </div> 
    
)

export default TodoPanel;