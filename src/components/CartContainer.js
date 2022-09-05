import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CartItem from './CartItem';
import { clearCart } from '../features/cart/cartSlice';

const CartContainer = () => {
    const {cartItems, total, amount} = useSelector(store => store.cart);
    const dispatch = useDispatch();

    if(cartItems.length < 1){
        return(<section className='cart'>
            <header>
                <h2>Your bag</h2>
                <h4 className='empty-cart'>is currently empty</h4>
            </header>
        </section>)
    }

    return (
        <section className='cart'>
            <header>
                <h2>Your bag</h2>
            </header>

            <div>
                {cartItems.map(item => (<CartItem key={item.id} {...item}/>))}
            </div>
            
            <footer>
                <hr/>

                <div className='cart-total'>
                    <h4>total <span>${total}</span></h4>
                </div>

                <button className='btn clear-btn' onClick={() => dispatch(clearCart())}>Clear cart</button>
            </footer>
        </section>
    )
}

export default CartContainer