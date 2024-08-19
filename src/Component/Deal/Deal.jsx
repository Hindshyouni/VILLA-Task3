import React from 'react'
import './Deal.css'
import room from '../../assets/property-05.jpg'
import calender2 from '../../assets//calendar-solid (1).svg'

export const Deal = () => {
  return (
    <>
    <div className='test'>
    <div className='deal-div1'>
        <div className='deal-div1-title'>
          <h4>BEST DEAL</h4>
            <h1>FIND YOUR BEST</h1>
            <h1>DEAL RIGHT NOW !</h1>
        </div>

        <div className='deal-buttom'>
            <button>Appartment</button>
            <button>Villa House</button>
            <button>Pent House</button>
        </div>

    </div>

    <div className='deal-div2'>
        <div className='deal-div2-info'>
            <p>Total flat space<span>185 m2</span> </p>
            <hr/>
            <p>Floor Number<span>26 th</span> </p>
            <hr/>
            <p>Number of rooms<span>4</span> </p>
            <hr/>
            <p>Parking Available<span>yes</span> </p>
            <hr/>
            <p>Payment Process<span>Bank</span> </p>
    
        </div>

        <div className='deal-div2-img' >
            <img src={room} alt=""/>
        </div>
        <div className='deal-div2-3'>
            <h5>Extra Info About Property</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, iure delectus incidunt,  explicabo sapiente consequatur tenetur, laudantium perspiciatis asperiores animi in culp</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam laborum est, magni  distinctio sit possimus quisquam quia qu</p>

            <div className='deal-div2-btn'>
                <button>Schedule A Visit</button>
                <div className='btn-icon'> <img className='icon-btn' src={ calender2} alt=""/></div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
