import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
  const first80 = fakeData.slice(0,80);
  const [products, setProducts] = useState(first80);
const [cart, setCart] = useState([]);

// add click handler function && eta Product.js er button.. tai eikhaner <Product> e add kore dite hobe
const handleAddProduct = (product) =>{
  console.log('product added',product);
const newCart = [...cart, product];
setCart(newCart);
}




  return (
    <div className='shop-container'>
      <div className='product-container'>

  {
    products.map(pd => <Product 
      
      handleAddProduct = {handleAddProduct}//click handler ta pass kore dilam
      product={pd}></Product>)
  }

      </div>
      <div className='cart-container'>
        <h2>this is cart</h2>
     <Cart cart = {cart}></Cart>
        

      </div>
   
    </div>
  );
};

export default Shop;