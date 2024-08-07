import React from 'react'
import './Offers.css'
import exclusive_image from '../Images/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
      <h1 id='exclusive'>Exclusive</h1>
      <h1>Offers For You</h1>
      <p>ONLY ON BEST SELLING PRODUCT</p>
      <button>Click me</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
