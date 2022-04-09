import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setItemInCart } from '../../redux/cart/reducer';
import './Item.css'

export default function Item(props) {

  const [state, setState] = useState(true);

  const addToCart = () => {
    setState(false)
  } 

  const navigate = useNavigate(null)

  const goToCart = () => navigate('/link')

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setItemInCart(props))
  }

  const clickToBuy = () => {
    handleClick(); 
    addToCart()
  }


  return (
    <div key={props.key} className='wrapper'>
        <div className='item_wrapper'>
          <img className='image' src={props.image} alt="" />
          <h3 className='item_title'>{props.title}</h3>
          <span className='item_price'>{props.price} ₽</span>
        </div>

        {state ? <button onClick={clickToBuy} className='button'>Добавить в корзину</button> : <button onClick={goToCart} className='button_end'>Оформить заказ</button>}

    </div>
  )
}
