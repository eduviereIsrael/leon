import React, { useRef } from "react";
import { useStateContext } from "../context/StateContext";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { TiDeleteOutline } from 'react-icons/ti';
import { urlFor } from "../Client";





const Cart = () => {

    const CartRef = useRef();
    const { totalPrice, totalQuantites, cartItems, toggleCartItemQuantity, setShowCart, onRemove} = useStateContext();
  
    return (
      <div className='cart-wrapper' ref={CartRef}>
        <div className='cart-container'>
          <button 
            type='button'
            className='cart-heading'
            onClick={() => setShowCart(false)}>
              <AiOutlineLeft />
              <span className='heading'>Your Cart</span>
              <span classNamecart-num-items>({totalQuantites}  items)</span>
            </button>
            {cartItems.length < 1 && (
              <div className='empty-cart'>
                <AiOutlineShopping size={150}/>
                <h3>Your shopping bag is empty</h3>
                <Link to = "/">
                  <button 
                    type='button'
                    onClick={() => setShowCart(false)}
                    className="btn">
                      Continue shopping
                    </button>
                </Link>
              </div>
            )}
            <div className='product-container'>
              {cartItems.length >= 1 && cartItems.map((item, i) =>(
                <div className='product' key = {i}>
                  <img src = {urlFor(item?.image)} alt = {item?.name} className='cart-product-image' />
                  <div className='item-desc'>
                    <div className='flex top'>
                      <h5>{item.name}</h5>
                      <h4>${item.price * item.quantity}</h4>
                    </div>
                    <div className='flex bottom'>
                      <div>
                      <p className='quantity-desc'>
                        <span className='minus' 
                          onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus/></span>
                        <span className='num' >{item.quantity}</span>
                        <span className='plus' onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus/></span>
                      </p>
                      </div>
                      <button type='button' className='remove-item' onClick={() => onRemove(item)}>
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              )) }
            </div>
            {cartItems.length >= 1 && (
              <div className='cart-bottom'>
                <div className='total'>
                  <h3>Subtotal:</h3>
                  <h3>${totalPrice}</h3>
                </div>
                {/* <div className='btn-container'>
                  <button type='button' className='btn'>
                    Pay with Stripe
                  </button>
                </div> */}
                {/* <FlutterWave /> */}
              </div>
            )}
        </div>
      </div>
    )
  }
  
  export default Cart