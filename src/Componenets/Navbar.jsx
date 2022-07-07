import React from 'react'
import {Link} from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext';
import Cart from './Cart';
// import { Cart } from './'

// import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  

  const {showCart, setShowCart, totalQuantities } = useStateContext();
  // console.log(totalQuantities)

  return (
    <div className='navbar'>
      <div className="navbar-container">
        {/* <div className='nav-items'>

        </div> */}
        <p className="logo">
          <Link to="/">JSM Headphones</Link>
        </p>
        <button type="button" className='cart-icon' onClick={() => setShowCart(!showCart)}>
          <AiOutlineShopping />
          {/* <span className="cart-item-qty">{totalQuantities}</span> */}
          <span className="cart-item-qty" >{totalQuantities}</span>
        </button>
      </div>
      {/* {showCart && <Cart />} */}
      {showCart && <Cart />}

    </div>
    
  )
}

export default Navbar