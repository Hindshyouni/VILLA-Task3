import React from 'react'
import './FirstColumnDeal.css'

const FirstColumnDeal = ({selectDeal}) => {

  const title = {
    apartment: {space:"185 m2", floor:"26 th", rooms:"4"},
    Villa: {space:"250 m2", floor:"26 th", rooms:"5"},
    penthouse: {space:"350 m2", floor:"34 th", rooms:"4"},
}

  return (
    <div className='deal-div2-info'>
            <p>Total flat space<span>{title[selectDeal]?.space}</span> </p>
            <hr/>
            <p>Floor Number<span>{title[selectDeal]?.floor}</span> </p>
            <hr/>
            <p>Number of rooms<span>{title[selectDeal]?.rooms}</span> </p>
            <hr/>
            <p>Parking Available<span>yes</span> </p>
            <hr/>
            <p>Payment Process<span>Bank</span> </p>
    
        </div>
  )
}

export default FirstColumnDeal