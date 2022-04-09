import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemFromCart } from '../../redux/cart/reducer';
import './Korzina.css'

export default function Korzina() {

  const cart = useSelector(state => state.cart.itemsInCart);
  const totalPrice = cart.reduce((acc, item) => acc += item.price, 0)

  const dispatch = useDispatch();

  const handleClickDelete = (id) => {
    dispatch(deleteItemFromCart(id))
  }

  

  return (
    <div className='korzina_box'>
      {cart.length > 0 ? 
      <div>
        <table className='table'  border="1" width="100%" cellpadding="5">
          <thead>
            <tr>
                <th>Наименование</th>
                <th>Стоимость</th>
                <th></th>
            </tr>
          </thead>
          <tbody>
          {cart.map(cart => 
                <tr>
                  <th>{cart.title}</th>
                  <th>{cart.price}</th>
                  <th>
                    <button onClick={() => handleClickDelete(cart.id)}>Убрать</button>
                  </th>
                </tr>)}
          </tbody>
        </table>
      <span className='total_price'>Итого: {totalPrice} ₽</span>
      </div> : <div className='korzina_pusto'>Корзина пуста</div>}
    </div>
  )
}
