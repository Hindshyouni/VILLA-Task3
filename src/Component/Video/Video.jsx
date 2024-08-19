import React from 'react'
import './Video.css'
import videoimg from '../../assets/contact-bg.jpg'
import frame from '../../assets/video-frame.jpg'
import play from '../../assets/play-solid (1).svg'
import Experience from '../Experience/Experience'


const Video = () => {
  return (
    <>
    <div className='all-video'>
    <div className='video'>
        <img src={videoimg} alt=""/>
        <div className='video-items'>
            <h5>VIDEO VIEW</h5>
            <h1>GET CLOSER VIEW</h1>
            <h1>$ DIFFRENT</h1>
            <h1>FEELING </h1>
        </div>
    </div>
    <div className='video-img'>
        <img src={frame} alt=""/>
        <div className='play-icon'>
            <div>
                <img src={play} alt=""/>
            </div>
        </div>
    </div>

    </div>

    <div className='experience'>
    <Experience span="34" pargraph1="Buildings" pargraph2="Finished Now" />
    <Experience span="12" pargraph1="Years" pargraph2="Experience" />
    <Experience span="24" pargraph1="Awwards" pargraph2="won 2023" />
    </div>
    </>
  )
}

export default Video