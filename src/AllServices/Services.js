import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';
import './Sevices.css';

// className=" wrapper container"

const Services = () => {
    const [products,setProducts]=useState([])
    
    useEffect( ()=>{
        fetch('./Data.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data.slice(0,8)));
    },[])
    return (
        <div className="container">
            
             {products.map(product=><Product img={product.img } name={product.name} description={product.description} id={product.id}>
             
             </Product>)
             }
        </div>
    );
};

export default Services;