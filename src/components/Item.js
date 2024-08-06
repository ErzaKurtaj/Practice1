import React from 'react'
import './user.scss';

const Item = (props) => {
  return (
    <div className='item'>
    <div className='icon'>{props.icon}</div>
    <h6>{props.title}</h6>
    <p>{props.description}</p>
    </div>
  )
}

export default Item;