import React, { useState } from 'react'
import './DealBytton.css'

const DealButton = ({ setSelectDeal }) => {

    const [activeBtn, setActiveBtn] = useState("apartment");

    const btnClick = (btnType) => {
        setActiveBtn(btnType);
        setSelectDeal(btnType);
    }

    return (
      <div className='deal-buttom'>
        <button 
          className={` ${activeBtn === "apartment" ? "active" : ""}`} 
          onClick={() => btnClick("apartment")}>Appartment</button>
        <button 
          className={` ${activeBtn === "Villa" ? "active" : ""}`} 
          onClick={() => btnClick("Villa")}>Villa House</button>
        <button 
          className={` ${activeBtn === "penthouse" ? "active" : ""}`} 
          onClick={() => btnClick("penthouse")}>Pent House</button>
      </div>
    )
}

export default DealButton