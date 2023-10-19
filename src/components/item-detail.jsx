import React from 'react';
import '../stylesheets/item-detail.css'
import Buy_button from './buy-button';
import { useCount } from '../Customhooks/useCount';
function Item(props){

    const { counter, decrement, increment, reset } = useCount(0, 0, 10);

    return(
    <div className='item-detail'>
        <p className='item-name'>{props.name}</p>
        <p className='item-model'>{props.model} </p>
        <img className='item-img' src={props.img} alt="imagen del producto" />
        <p className='item-price'>Price: USD ${props.price}</p>
        <div className='buy-counter'>
            <button className='plus-less-button' onClick={decrement}>-</button>
            <p className='counter'>{counter}</p>
            <button className='plus-less-button' onClick={increment}>+</button>
        </div>
        <button className='reset-button' onClick={reset}>Reset</button>
        <Buy_button/>
    </div>
    ); 
}

export default Item;
 