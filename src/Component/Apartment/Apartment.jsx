import React from 'react'
import './Apartment.css'
import apartmentImg from '../../assets/property-01.jpg'

const Apartment = () => {
  return (
    <div className='apartm'>
        <img src={apartmentImg} alt="not found" />
        <button>Apartment</button>
        <p>24 New Street Miami , or 24560</p>
    </div>
  )
}

export default Apartment