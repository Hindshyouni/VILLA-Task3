import React from "react";
import "./Properties.css";

import img1 from "../../assets/property-01.jpg";
import img2 from "../../assets/property-02.jpg";
import img3 from "../../assets/property-03.jpg";
import img4 from "../../assets/property-04.jpg";
import img5 from "../../assets/property-05.jpg";
import img6 from "../../assets/property-06.jpg";

import Card from "../Card/Card";
import CardComponent from "../CardComponent/CardComponent";

const Properties = () => {
  const cards = [
    {
      img: img1,
      btn: "Luxury Villa",
      price: "$2.264.000",
      title: "18 Street Miami OR 97219",
      bednumber: "8",
      area: "545m2",
      parking: "6 spots",
      bathnumber: "8",
      floor: "3",
    },
    {
      img: img2,
      btn: "Luxury Villa",
      price: "$1.180.000",
      title: "54  Old Street Florida, OR 27001",
      bednumber: "6",
      area: "450m2",
      parking: "8 spots",
      bathnumber: "5",
      floor: "3",
    },

    {
      img: img4,
      btn: "Luxury Villa",
      price: "$1.460.000",
      title: "126 Old Street Miami, OR 38540",
      bednumber: "5",
      area: "225m2",
      parking: "10 spots",
      bathnumber: "4",
      floor: "3",
    },
    {
      img: img6,
      btn: "Apartment",
      price: "$584.500",
      title: "12 Street Miami OR 12650",
      bednumber: "4",
      area: "125m2",
      parking: "2 cars",
      bathnumber: "3",
      floor: "25th",
    },
    {
      img: img3,
      btn: "Penthouse",
      price: "$925.600",
      title: "34 Brach Street Miami, OR 42680",
      bednumber: "4",
      area: "180m2",
      parking: "2 cars",
      bathnumber: "4",
      floor: "38th",
    },
    {
      img: img5,
      btn: "Modern Condo",
      price: "$450.000",
      title: "22 New Street Portland, OR 16540",
      bednumber: "3",
      area: "165m2",
      parking: "3 spots",
      bathnumber: "2",
      floor: "26th",
    },
  ];

  return (
    <>
      <div className=" Properties-title">
        <h5>PROPERTIES</h5>
        <h1>We Provide The</h1>
        <h1>Best Property</h1>
        <h1>You Like</h1>
      </div>
      <CardComponent cards={cards} />
    </>
  );
};

export default Properties;
