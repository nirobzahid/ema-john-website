 import React from 'react';
 
 const Cart = (props) => {
   const cart = props.cart;
   console.log(cart);
  //  use reduce, we add (prd = product) + total(that is old value)
  const total = cart.reduce((total, prd) => total + prd.price, 0)









//   const shipping = 0;
//   if(total <= 50){
// shipping = 0;
//   }
//   else if(total > 50){
//     shipping = 2.00;
//   }
//   else if(total > 100){
// //     shipping = 5.00;
//   }
//   else if(total > 500){
//     shipping = 10.00;
//   }
//   else if(total > 1000){
//     shipping = 20.00;
//   }
//   else if(total > 2000){
//     shipping = 30.00;
//   }

  const tax = total/10;
  const grandTotal = (total + tax);
  const formatNumber = num => {
    const precision = num.toFixed(2);
    return Number(precision);
  }

   return (
     <div>
       <h2>Order summary</h2>
   <p>Items ordered: {cart.length}</p>
   <p>Product price: {formatNumber(total)}</p>
    {/* <p>Shipping Cost: {formatNumber(shipping)}</p>  */}
   <p>Tax: {formatNumber(tax)}</p>
   <p>Total price: {formatNumber(grandTotal)}</p>
     </div>
   );
 };
 
 export default Cart;