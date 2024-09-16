import React from 'react'
import img1 from '../../assets/property-05.jpg'
import img2 from '../../assets/property-03.jpg'
import img3 from '../../assets/property-06.jpg'
import './DealImg.css'

const DealImg = ({ selectDeal }) => {
  const images = {
    apartment: img1,
    Villa: img2,
    penthouse: img3,
  }

  return (
    <div className='deal-div2-img'>
      <img src={images[selectDeal]} alt=""/>
    </div>
  )
}

export default DealImg


