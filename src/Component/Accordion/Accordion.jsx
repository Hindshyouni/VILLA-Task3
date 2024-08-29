import React, { useState } from 'react'
import './Accordion.css'

const Accordion = () => {

    const [selected , setSelected] = useState(null)
    const toggle =(i) =>{
        if (selected == i){
            return setSelected(null)
        }
        setSelected(i)
    }


    const data=[{
        question :'How Does this Work ?',
        answer:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus iure omnis corrupti reprehenderit officiis, magni expedita aliquam, ex dolorem ratione eaque non vel praesentium possimus, maiores deleniti odit sint.'
    },

    {
        question :'Why is Villa Ageancy the Best ?',
        answer:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus iure omnis corrupti reprehenderit officiis, magni expedita aliquam, ex dolorem ratione eaque non vel praesentium possimus, maiores deleniti odit sint.'
    },

  
]




  return (
    <div className='widAccordion'>
    <div className='two-card'>
    <h4>Best Useful links ?</h4>
    <hr/>
    <p>Lorem ipsum dolor sit,<span className='span1'> amet consectetur </span>adipisicing elit.  molestias nesciunt dignissimos asperiores impedit magni velit<span className='span2'> eaque esse repellendus porro?</span> Vitae!</p>
   
    <hr/>
  


    <div className='accordion'>
       {data.map((items , i)=>(
       <div className="item">
           <div className="title" onClick={()=> toggle(i)}>
              <h5 className='paraghrap'>{items.question}</h5>
              <span>{selected == i ? '-' : '+'}</span>
           </div>
          <div className= {selected == i ? ' show' : 'content'}>{items.answer}</div>
       </div>
      ) )}

    </div>
    </div>

</div>
  )
}

export default Accordion