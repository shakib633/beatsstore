import { faCartPlus, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const{product,handelAddBtn, handelResetBtn}=props
    const{name, picture, price, company, about}= product;
   
    return (
        <div className="product">
            <img src={picture} alt=""></img>
           <div className="product-data">
           <p>{name}</p>
            <p>Brand: {company}</p>
            <p>Price: {price}</p>
            <p>About: {about}</p>

           </div>
           <button onClick={()=>handelAddBtn(product)} className="buy-btn">
               <p className="btn-txt">Add to cart  <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></p>
             
           </button>
        </div>
    );
};

export default Product;