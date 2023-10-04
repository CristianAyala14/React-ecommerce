import React from 'react';
import '../stylesheets/main-body.css'
import Item from './item-detail';
import Products from '../json/Products.json'; // Asegúrate de proporcionar la ruta correcta al archivo JSON


function Mainbody(){

    
    const items = Products.map((product, index) => (
        <div key={index} className="product-card">
            <Item
                name={product.name}
                model={product.model}
                price={product.price}
                img={product.img}
            />
        </div>
    ));

    return(
    <div className='main-body'>
        <h1>OUR GUITARS!</h1>
        <div className='item-list-container'>
            {items}
        </div>
    </div>
    ); 
}

export default Mainbody;

