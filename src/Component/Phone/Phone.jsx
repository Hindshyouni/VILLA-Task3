import React from 'react'
import phone from '../../assets/phone-icon.png'
import email from '../../assets/email-icon.png'
import './Phone.css'

const Phone = () => {
  return (
    <div className='phone'>
            <div className='phone-info'>
                <img src={phone} alt=""/>
                <div>
                <p>010-020-0340</p>
                <p>Phone Number</p>
                </div>
            </div>

            <div className='phone-info'>
                <img src={email} alt=""/>
                <div>
                <p>info@villa.co</p>
                <p>Business Email</p>
                </div>
            </div>

        </div>
  )
}

export default Phone