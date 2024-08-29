import React from 'react'
import './Information.css'
import info1 from '../../assets/info-icon-01.png'
import info2 from '../../assets/info-icon-02.png'
import info3 from '../../assets/info-icon-03.png'
import info4 from '../../assets/info-icon-04.png'

const Information = (Props) => {
  return (
    <div className='three'>
    <div className='three1'>
        <img src={info1} alt=""/>
        <div>
        <span>{Props.Distance}</span>
        <p>total flat space</p>
        </div>
    </div>
    <hr/>

    <div className='three1'>
        <img src={info2} alt=""/>
        <div>
        <span>contract</span>
        <p>contract ready</p>
        </div>
    </div>
    <hr/>

    <div className='three1'>
        <img src={info3} alt=""/>
        <div>
        <span>Payment</span>
        <p>{Props.payment} </p>
        </div>
    </div>
    <hr/>   
    <div className='three1'>
        <img src={info4} alt=""/>
        <div>
        <span>Safety</span>
        <p>24/7 Under</p>
        </div>
    </div>
</div>
  )
}

export default Information