import React, {useContext} from 'react'
import { MenuList } from '../helpers/MenuList'
import { ShopContext } from '../context/shop-context'
import { CartItem } from '../components/CartItem'
import "../styles/Cart.css"
import { useNavigate } from 'react-router-dom'

function Cart() {

    const {cartItems, getTotalCartAmount} = useContext(ShopContext)
    let total = getTotalCartAmount()

    const navigate = useNavigate()

  return (
    <div className='cart'>
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className='cartItems'>
            {MenuList.map((menuItem) => {
                 if(cartItems[menuItem.id] !== 0){
                    return <CartItem data={menuItem} />
                 }
            })}
        </div>

        {total >0 ? 
        (
            <div className='checkout'>
                <h3> Subtotal: ${total}</h3>
                <div>
                <button onClick={() => navigate('/menu')}>Continue Shopping</button>
                <button>Checkout</button>
                </div>
            </div>
        )
        :
        (  
            <>
            <h4 style={{marginTop:'80px'}}>Cart is Empty</h4>  
            <button className='emptyBttn' onClick={() => navigate('/menu')}>Explore Menu</button>
            </>
        )
        }

    </div>
  )

}

export default Cart
