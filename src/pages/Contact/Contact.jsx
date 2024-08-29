import React from "react";
import Form from "../../Component/Form/Form";
import Hero from "../../Component/Hero/Hero";
import Section2Contact from "../../Component/Section2Contact/Section2Contact";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Hero text=" HOME / CONTACT US" title="CONTACT US" />
      <div className="contactt">
        <div className="section2-contactUs">
          <Section2Contact />
          <Form />
        </div>

        <div className="ww">
          <iframe
            className="gmap " width="300"height="600"frameborder="0"scrolling="no"marginheight="0"marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
