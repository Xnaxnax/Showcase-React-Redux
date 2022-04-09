import React, { useEffect, useState } from 'react'
import Item from '../Item/Item';
import './Homepage.css'

export default function Homepage() {

  const [items, setItems] = useState([])

  useEffect(( ) => {
    fetch('https://appevent.ru/dev/task1/catalog')
    .then(res => {
    return res.json( );})
    .then(json => {
    const {items} = json
    setItems(items)
    })
  }, [ ])

console.log(items)

  return (
    <div className='wrapper'>
      <div className="container">
        <div className="items_wrapper">
        {items.map(item => <Item
        id={item.id}
        title={item.name}
        price={item.price}
        image={item.image}
        />)}
        </div>
      </div>
    </div>
  )
}
