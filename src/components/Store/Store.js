import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Store.css"

const Store = () => {
    const[products, setProducts]= useState([]);
    const[cart, setCart]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handelAddBtn=(product)=>{
        const newCart=[...cart, product];
        setCart(newCart);
        
    }
    return (
        
      <div>
          <h1>Beats Store 🎧</h1>
          <p className="motto">Sounds Good Mind Cool</p>
            <div className="store"> 
        
        <div className="products-container">

            {
                products.map(product=><Product key={product._id}
                  product={product}
                  handelAddBtn={handelAddBtn}
                  
               ></Product>)
            }
     </div>    
      <div className="cart">
       <Cart cart={cart} 
       ></Cart>
       </div>
      </div>
      </div>
    );
};

export default Store;