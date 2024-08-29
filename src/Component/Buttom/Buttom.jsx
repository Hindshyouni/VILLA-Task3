import React, { useState } from 'react'
import './Buttom.css'

const Buttom = ( {setCard}) => {

  const [buttons , setButtons] = useState ('show All');

  const ButtonClick = (label , count)=>{
    setButtons(label);
    setCard(count);


  };
  return (

    <div className='properties-btn'>
        <button className={buttons === 'show All' ? 'active' : ''} 
        onClick={() => ButtonClick('show All' , 9) }> Show All</button>
        
        <button  className={buttons === 'Apartment' ? 'active' : ''} 
        onClick={() => ButtonClick('Apartment' , 7) }> Apartment</button>

        <button className={buttons === 'Villa House' ? 'active' : ''} 
        onClick={() => ButtonClick('Villa House' , 4) }> Villa House</button>

        <button className={buttons === 'Penthouse' ? 'active' : ''} 
        onClick={() => ButtonClick('Penthouse' , 3) }> Penthouse</button>
    </div>
  )
}

export default Buttom