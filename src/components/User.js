import React from 'react'
import Item from './Item'
import { Data } from './data'
import './user.scss'



const User = () => {
  return (
    <div className='user'>
      {Data.map((d,i) =>{
        return(
          <Item
          key={i} {...d}
          />
        )
      })}
    </div>
  )
}

export default User;