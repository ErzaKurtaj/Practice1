import React from 'react'
import { NavData } from './NavData'
import { Link } from 'react-router-dom'

function ProductsMegemenu() {
  return (
    <div className='nav-megamenu'>
        {NavData.map((props) => {
          return(
            <div className='menu-link'>
              <Link to ={props.to}>
              <div className='icon'>{props.icon}</div>
              <div className='block'>
                <h6>{props.title}</h6>
                <p>{props.description}</p>
              </div>
              </Link>
              </div>
          )
        })}
    </div>
  )
}

export default ProductsMegemenu