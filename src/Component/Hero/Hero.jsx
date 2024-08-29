import React from 'react'
import './Hero.css'
import head from '../../assets/page-heading-bg.jpg'

const Hero = (Props ) => {
  return (
    <>
    <div className='heroImg'>
        <img src={head} alt=""/>

        <div className='heroTitle'>
        <span>{Props.text}</span>
        <h1>{Props.title}</h1>
        </div>
    </div>
    
    </>
  )
}

export default Hero