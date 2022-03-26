import React from 'react';
import Product from '../Product/Product';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className="order-cart">
             <h4>order</h4>
          <p>{
              cart.map((cart)=><ul><li>{cart.name}</li></ul>)
              }</p>
              <button  >choose one</button> 
        </div>
    );
};

export default Cart;