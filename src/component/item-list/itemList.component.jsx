import React from 'react';
import Item from './../item/item.component';
let ItemList = (props) => (
    props.items.map(item=> <Item  id = {item.id} title={item.title}/> )
)

export default ItemList;