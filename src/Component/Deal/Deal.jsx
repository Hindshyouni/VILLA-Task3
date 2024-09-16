import React, { useState } from "react";
import "./Deal.css";
import FirstColumnDeal from "../FirstColumnDeal/FirstColumnDeal";
import DealButton from "../DealButttom/DealButton";
import DealImg from "../DealImg/DealImg";
import InformationDeal from "../InformationDeal/InformationDeal";

export const Deal = () => {
  const [selectDeal, setSelectDeal] = useState ("apartment");

  return (
    <>
      <div className="test">
        <div className="deal-div1">
          <div className="deal-div1-title">
            <h4>BEST DEAL</h4>
            <h1>FIND YOUR BEST</h1>
            <h1>DEAL RIGHT NOW !</h1>
          </div>

          <DealButton setSelectDeal={setSelectDeal} />
        </div>

        <div className="deal-div2">
          <FirstColumnDeal selectDeal={selectDeal} />

          <DealImg selectDeal={selectDeal} />

          <InformationDeal selectDeal={selectDeal} />
        </div>
      </div>
    </>
  );
};
