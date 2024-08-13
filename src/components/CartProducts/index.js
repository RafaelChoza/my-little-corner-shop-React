// CartProducts.js
import React from 'react';
import { ButtonLess, ButtonPlus, CloseCart, DeleteProduct, DivButtons, DivCartTitle, DivProductCart, EmptyButton, ImgProductCart, ShoppingCart, SpanTotalPay, TotalPay } from './styles';

const CartProducts = ({ cart, removeItemOnCart, increaseQuantity, decreaseQuantity, clearCart, onClickCloseIconCart }) => {

  const totalToPay = () => cart.reduce((total, item) => total + (item.quantity * item.price), 0)
  



  return (
    <ShoppingCart className='shopping__cart'>
      <>
        <DivCartTitle className='div__cartTitle'>
          <h2>Shopping Cart</h2>
          <CloseCart onClick={onClickCloseIconCart} className='close__cart'>Close</CloseCart>
          </DivCartTitle>
      </>  
      {cart.length === 0 ? (
        <p>Shopping cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <DivProductCart key={item.id}>
              
                  <DivButtons className='div__buttons'>
                    <ButtonLess onClick={() => decreaseQuantity(item.id)} className='button__less'>-</ButtonLess>
                    <p>{item.quantity}</p>
                    <ButtonPlus onClick={() => increaseQuantity(item.id)} className='button__plus'>+</ButtonPlus>
                  </DivButtons>
                    <p>{item.title}</p>
                    <p>$  {item.price}</p>
                    <ImgProductCart className='img__cart' src={item.image}/>
                    <DeleteProduct className='delete__product' onClick={() => removeItemOnCart(item.id)}>Remove</DeleteProduct>
                
            </DivProductCart>
          ))}
          <EmptyButton onClick={clearCart} className='empty__button'>Empy Cart</EmptyButton>
          <TotalPay>Total a pagar : <SpanTotalPay>${totalToPay()}</SpanTotalPay></TotalPay>
        </ul>
      )}
    </ShoppingCart>
  );
};

export default CartProducts;
