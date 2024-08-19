import React from 'react'
import './Feauterd.css'
import room from '../../assets/featured.jpg'
import feauticon from '../../assets/featured-icon.png'
import info1 from '../../assets/info-icon-01.png'
import info2 from '../../assets/info-icon-02.png'
import info3 from '../../assets/info-icon-03.png'
import info4 from '../../assets/info-icon-04.png'
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
            

            <div className='two-card'>
                <h4>Best Useful links ?</h4>
                <hr/>
                <p>Lorem ipsum dolor sit,<span className='span1'> amet consectetur </span>adipisicing elit.  molestias nesciunt dignissimos asperiores impedit magni velit<span className='span2'> eaque esse repellendus porro?</span> Vitae!</p>
                <p className='paraghrap'>How Does this Work ?</p>
                <hr/>
                <p className='paraghrap'>Why is Villa Ageancy the Best ?</p>
            </div>
        </div>

        <div className='three'>
            <div className='three1'>
                <img src={info1} alt=""/>
                <div>
                <span>250 m2</span>
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
                <p>payment </p>
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
    </div>
  )
}
