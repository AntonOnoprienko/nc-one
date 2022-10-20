import React from 'react';
import '../App.scss'
import CartItem from "./CartItem";

const CartComponent = () => {
    return (
        <div className="cart__inner">
            <p className='cart__title'>
                Favorites
            </p>
            <div className='cart__list'>
                <CartItem name={'Shloimys Sprinkles Cookies'} src={"/static/1664999721058.jpg"} price={120}/>
                <CartItem name={'Shloimys Sprinkles Cookies'} src={"/static/1664999721058.jpg"} price={120}/>
                <CartItem name={'Shloimys Sprinkles Cookies'} src={"/static/1664999721058.jpg"} price={120}/>
            </div>
        </div>
    )
}
export default CartComponent;