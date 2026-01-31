import React from 'react'
import './PlaceOrder.css'
import { useCallback } from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">
          Delivery Information
        </p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>

        </div>
        <input type="text" placeholder='Email Address'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City '/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code'/>
          <input type="text" placeholder='Contry'/>
        </div>
        <input type="text" placeholder='phone'/>
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-tatal-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-tatal-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-tatal-details">
              <b>Total </b>
              <b>${getTotalCartAmount()+2}</b>
            </div>
           
          </div>
          <button>Proceed To Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
