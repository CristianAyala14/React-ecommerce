import React from 'react';
import '../stylesheets/main-body.css'
import Item from './item-detail';
import Products from '../json/Products.json'; // Asegúrate de proporcionar la ruta correcta al archivo JSON
import { useState, useEffect } from 'react';
function Mainbody(){
    const [products, setproducts] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
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
            setproducts(items)
            setLoading(false);
        }, 5000);
    },[]);
    return (
        <div className='main-body'>
          <h1>OUR GUITARS!</h1>
          {loading ? (<p className='loading-txt'>Loading...</p>) : (<div className='item-list-container'>
              {products}
            </div>)
          }
        </div>
      );
}
export default Mainbody;

