import React from 'react';
import '../stylesheets/item-detail.css'

function Item(props){
    return(
    <div className='item-detail'>
        <p>Name: {props.name}</p>
        <p>Model: {props.model} </p>
        <p>Price: {props.price}</p>
        <p>Img: {props.img}</p>
    </div>
    ); 
}

export default Item;
