import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    
   
  const checkOut = async () => {
    const productData = {
      items:[
     {id: 1,name:"MENS COTTON JACKET",price: 75.00,quantity:1},
     {id:2,name:"SANDISK SSD PLUS 1TB",price:160.00,quantity:1}]

    }
    const response = await axios.post("http://localhost:5000/",{
      headers: {
        'Content-Type': 'application/json'
        },
        data: (productData)
     
    })
    console.log(response.data);
    window.location.href = (response.data.url);
  }
  return (
    <div className="App">
    <div class="wrap cf">
       <div class="heading cf">
         <h1>My Cart</h1>
         <a href="#" class="continue">Continue Shopping</a>
       </div>
       <div class="cart">
         <ul class="cartWrap">
           <li class="items odd">
         <div class="infoWrap"> 
             <div class="cartSection">
             <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="" class="itemImg" />
               <h3>Mens Cotton Jacket</h3>
             </div>  
             <div class="prodTotal cartSection">
               <p>$75.00</p>
             </div>
                   <div class="cartSection removeWrap">
             </div>
           </div>
           </li>
           <li class="items even">
           <div class="infoWrap"> 
             <div class="cartSection">
             <img src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" alt="" class="itemImg" />
               <h3>SanDisk SSD PLUS 1TB </h3>
             </div>  
             <div class="prodTotal cartSection">
               <p>$160.00</p>
             </div>
                   <div class="cartSection removeWrap">
             </div>
           </div>
           </li>
         </ul>
       </div>
       <div class="subtotal cf">
         <ul>
                 <li class="totalRow final"><span class="label">Total</span><span class="value">$ 235.00</span></li>
           <li class="totalRow"><a href="#" class="btn continue" onClick={checkOut}>Checkout</a></li>
         </ul>
       </div>
         </div>  
      </div>
  )
}

export default Home