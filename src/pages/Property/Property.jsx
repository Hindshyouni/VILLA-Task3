import React, { useState } from 'react'
import Card from '../../Component/Card/Card'
import Hero from '../../Component/Hero/Hero'
import './Property.css'


import CardComponent from '../../Component/CardComponent/CardComponent'
import Buttom from '../../Component/Buttom/Buttom'
import Pagination from '../../Component/Pagination/Pagination'

const Property = () => {
  const [cardCount , setCard] = useState(9);

  
   
  return (
    <>

    <Hero text=" HOME / PROPERITES"  title="PROPERITES"/>

    <Buttom setCard={setCard}/>
   <CardComponent cardCount={cardCount} />
   <Pagination />
    
    </>
  )
}

export default Property