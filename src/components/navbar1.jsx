import React from 'react';
import '../stylesheets/navbar1.css'

function Navbar1(props){
  return(
    <div className='nav-container'>
      <p className='ecommerce-tittle'>{props.tittle}</p>
      <ul>
        <li><a href="#">{props.op1}</a></li>
        <li><button className='cart-buttom' ><a className='cart-count-number' href="#"><i class="fa-solid fa-cart-shopping"></i>{props.op2}</a></button></li>
      </ul>
    </div>
  ); 
}

export default Navbar1;
