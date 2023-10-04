import React from 'react';
import '../stylesheets/item-detail.css'
import Buy_button from './buy-button';

function Item(props){
    return(
    <div className='item-detail'>
        <p className='item-name'>{props.name}</p>
        <p className='item-model'>{props.model} </p>
        <img className='item-img' src={props.img} alt="imagen del producto" />
        <p className='item-price'>Price: USD ${props.price}</p>
        <Buy_button/>
    </div>
    ); 
}

export default Item;
 