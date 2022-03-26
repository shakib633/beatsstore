import React,{useState} from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    const[iteam, setIteam]=useState([]);

    const resetCart=()=>{
        const newCart=[];
        setIteam(newCart);
    }
    const getGenarateProduct=()=>{
        const getProduct=cart[Math.floor(Math.random()*cart.length)]
        setIteam(getProduct)
    }

   

    return (
        <div className="order-cart"> 
       <h4>Order Cart</h4>
        {
            cart.map(cart=><ul key={cart._id}><li>{cart.name}</li></ul>)
                        
        }
         <button onClick={getGenarateProduct} className="free-button">Get 1 Free</button>
         <h3>Free Gift:{iteam.name}</h3>
         <button onClick={resetCart} className="reset-button">Reset</button>
    
        </div>
    );

};

export default Cart;