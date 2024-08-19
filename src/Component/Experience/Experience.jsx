import React from 'react'
import './Experience.css'

const Experience = (Props) => {
  return (
<>
    <div className='Experience-card'>
        <div><span>{Props.span}</span></div>
        <div>
            <p>{Props.pargraph1}</p>
            <p>{Props.pargraph2}</p>
        </div>
    </div>
</>
  )
}

export default Experience