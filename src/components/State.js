import React , {useState} from 'react'
import './user.scss'

const State = () => {
  const[color,setcolor] = useState(false)

  const changeColor =() => {
      setcolor(!color)
  }
  return (
    <div className='state'>
      <button type='button' onClick={changeColor}>Change text color</button>
      <h1 className={color? 'green' : ''}>Change the color</h1>
    </div>
  )
}

export default State;