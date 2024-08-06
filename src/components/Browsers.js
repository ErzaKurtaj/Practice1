import React from 'react'
import { Data4 } from './data'
import {Link} from 'react-router-dom'
import './browsers.scss'

const Browsers = () => {
  return (
    <div className='browser-items'>
      {Data4.map((props) =>{
        return(
          <div className='item'> 
            <div className='inline'>
              <div className='logo' style={{content: `url(${props.logo})`}}></div>
              <h6>{props.name}</h6>
              </div>
              <p>{props.description}</p>
              <Link to={props.to}>{props.link}</Link>
            </div>
        )
      })}
    </div>
  )
}

export default Browsers