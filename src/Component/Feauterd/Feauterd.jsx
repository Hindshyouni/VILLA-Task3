import React from 'react'
import './Feauterd.css'
import room from '../../assets/featured.jpg'
import feauticon from '../../assets/featured-icon.png'
import Information from '../Information/Information'
import Accordion from '../Accordion/Accordion'
export const Feauterd = () => {
  return (
    <div className='feauterd'>
        <div className='one'>
            <img className='one-info' src={room} alt=""/>
            <div className='one-info1'>
                <img className='one-info2' src={feauticon} alt=""/>
            </div>
        </div>

        <div className='two'>
            <div className='two-h4'>
            <h4 >FEAUTERD</h4>
            </div>
            <h1>Best </h1>
             <h1>Appartment & </h1>
            <h1> Sea View</h1>
            

          <Accordion />
        </div>

        <Information Distance="250 m2"  payment="payment"/>
    </div>
  )
}
