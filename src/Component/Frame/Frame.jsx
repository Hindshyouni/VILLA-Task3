import React from 'react'
import './Frame.css'
import phone from '../../assets/phone-icon.png'
import email from '../../assets/email-icon.png'


const Frame = () => {
  return (
    <div className='gmap-frame'>
        <iframe className='gmap' width="600" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>

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
    </div>
  )
}

export default Frame