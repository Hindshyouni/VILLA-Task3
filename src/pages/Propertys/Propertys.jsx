import React from 'react'
import Accordion from '../../Component/Accordion/Accordion'
import Apartment from '../../Component/Apartment/Apartment'
import { Deal } from '../../Component/Deal/Deal'
import Hero from '../../Component/Hero/Hero'
import Information from '../../Component/Information/Information'
import './Propertys.css'

const Propertys = () => {
  return (
   <>
    <Hero text=" HOME / SINGLE PROPERTY"  title="SINGLE PROPERTY"/>
    <div className='section2-property'>
    <Apartment />
    <Information className="section2-2-property" Distance="450 m2"  payment="payment Process"/>
    </div>
    <div className='margacc'>
      <p>Lorem ipsum dolor sit amet, <span>consectetur adipisicing elit</span>. Maxime fugit voluptas distinctio ut necessitatibus neque doloribus magnam facilis nesciunt consequatur, quia assumenda. Blanditiis unde, voluptas eius earum animi explicabo autem.</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ex suscipit reprehenderit amet. Minus repellat numquam doloremque nobis voluptates. Sequi neque illum qui vero similique voluptatum odio laboriosam ducimus maxime!</p>
    <Accordion />
    </div>
    <Deal/>
    
   </>
  )
}

export default Propertys