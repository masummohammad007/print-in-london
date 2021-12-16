import React, { useEffect, useState } from 'react';

const RelatedProduct = () => {
    const [relatedProduct,setRelatedProduct]=useState([])
    useEffect( ()=>{
        fetch('./Data.JSON')
        .then(res=>res.json())
        .then(data=>console.log(data));
    },[])

    return (
        <div>
            
          
        </div>
    );
};

export default RelatedProduct;