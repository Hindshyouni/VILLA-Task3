import React from 'react'
import './Card.css'

function Card( Props 
   ) {
  return (
    <div className='cardd'>
        <img src={Props.img} alt=""/>
        <div className='containerPrice'>
            <button>{Props .btn}</button>
            <p>{Props .price}</p>
        </div>
        <h4>{ Props .title}</h4>
        <div className='info'>
            <div className='info1'>
                <p>Bedrooms: <span>{Props .bednumber}</span></p>
                <p>Area: <span>{Props .area}</span></p>
                <p>Parking: <span>{Props .parking}</span></p>

            </div>

            <div className='info1'>
                <p>Bathroom:<span>{Props .bathnumber}</span></p>
                <p>Floor:<span>{Props .floor}</span></p>
            </div>

        </div>
    <hr/>
        <div className='btn-card'>
            <button>Schadule a visit</button>

        </div>

    </div>
  )
}

export default Card