import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imgslide1 from '../../assets/banner-01.jpg'
import imgslide2 from '../../assets/banner-02.jpg'
import imgslide3 from '../../assets/banner-03.jpg'

const Header = () => {
  return (
   
        <Carousel className='' data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={imgslide1}
        alt="First slide"
      />
      <Carousel.Caption >
        <div className='text-white '>
        <h1 >HURRY !</h1>
        <h1>GET THE</h1>
        <h1> BEST VILLA</h1>
        
        </div>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={imgslide2}
        alt="Second slide"
      />
      <Carousel.Caption  >
      <div className='text-white  '>
        <h1 >HURRY !</h1>
        <h1>GET THE</h1>
        <h1> BEST VILLA</h1>
       
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={imgslide3}
        alt="Third slide"
      />
      <Carousel.Caption >
      <div className='text-white  '>
        <h1 >HURRY !</h1>
        <h1>GET THE</h1>
        <h1> BEST VILLA</h1>
        
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  )
}

export default Header