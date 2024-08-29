import React from 'react'
import './InformationDeal.css'
import calender2 from '../../assets//calendar-solid (1).svg'

const InformationDeal = ({ selectDeal }) => {
    const details={
        apartment: "Extra Info About Property",
        Villa:"Detail Info Villa",
        penthouse:"Extra Info About Penthouse" ,
    }
  return (
    <div className='deal-div2-3'>
            <h5>{details[selectDeal]}</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, iure delectus incidunt,  explicabo sapiente consequatur tenetur, laudantium perspiciatis asperiores animi in culp</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam laborum est, magni  distinctio sit possimus quisquam quia qu</p>

            <div className='deal-div2-btn'>
                <button>Schedule A Visit</button>
                <div className='btn-icon'> <img className='icon-btn' src={ calender2} alt=""/></div>
            </div>
        </div>
  )
}

export default InformationDeal