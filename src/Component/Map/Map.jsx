import React from 'react'
import './Map.css'
import videoimg from '../../assets/contact-bg.jpg'
import Frame from '../Frame/Frame'
import Form from '../Form/Form'

const Map = () => {
  return (
    <div className='video'>
<div className='ttt'>
    <img  src={videoimg} alt=""/>
    <div className='video-items'>
        <h5>CONTACTS</h5>
        <h1>GET In Touch</h1>
        <h1>With Our Agents</h1>
        
</div>
    </div>
    <div className='map-div'>
        <Frame />
        <Form />
    </div>
</div>
  )
}

export default Map