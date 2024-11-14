import React, { useContext } from 'react'

import { CartContext } from './../../context/CartContext';
import empty_cart from './../../assets/img/empty-cart.png'

import { BiSolidTrash } from "react-icons/bi";
import { StarRating } from '../../component/Testimonial/Testimonial';
import { useState } from 'react';



const Cart = () => {

  const [quantity, setQuantity] = useState(0)

  function add_quantity() {
    setQuantity((prevQuantity) => {
      return prevQuantity + 1;
    })
  }

  function remove_quantity() {
    setQuantity((prevQuantity) => {
      if (prevQuantity <= 1) return prevQuantity
      return prevQuantity - 1;
    })
  }



  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <>


      <div className="banner_section product ">
        <div className="section_heading">
          <h2 className='title'><span className='primary'>Y</span>our Cart</h2>

        </div>
      </div>

      <div className="row_col-3 product_banner">
        {cartItems.length === 0 ? (
          <div className='empty_wishlist'>
            <img src={empty_cart} alt="" />
            <h1>Your cart is empty.</h1>
          </div>
        ) : (

          cartItems.map((product) => (

            <div key={product.id} className="product-card" style={{ background: `${product.color}` }}>
              <div className={`wishlist-icon delete`}
                onClick={() => removeFromCart(product.productId)}
              >
                <BiSolidTrash />
              </div>
              <div className="product-content">
                <img src={product.image} loading="lazy" alt={product.name} className="product-image" />
                <div className="product-details">
                  <p className="price">${product.price} <sub>/kg</sub></p>
                  <div>
                    <p className="product-name">{product.name}</p>
                    <p className="product-rating">
                      <p>Quantity - {product.quantity}{' '}</p>
                    </p>
                  </div>
                </div>

                <div className="product_footer">
                  <div className="cart_input">
                    <button onClick={remove_quantity}>-</button>
                    <input type="number" name="" value={quantity} readOnly id="" />
                    <button onClick={add_quantity}>+</button>
                  </div>
                </div>


              </div>
            </div>


          ))
        )}
      </div>


    </>
  )
}



export default Cart
